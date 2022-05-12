###########
# BUILDER #
###########

# pull official base image
FROM node:16.5.0-alpine as builder

RUN mkdir -p /usr/src/app
# set working directory
WORKDIR /usr/src/app

# add `usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json .
COPY package-lock.json .
RUN yarn

# create build
COPY . .
RUN yarn build

#########
# FINAL #
#########

# base image
FROM nginx:1.19.4-alpine

# update nginx conf
RUN rm -rf nginx.conf
COPY . nginx.conf

# copy static files
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

# expose port
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]
