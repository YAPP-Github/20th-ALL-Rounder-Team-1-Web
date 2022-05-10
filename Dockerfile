FROM node

RUN mkdir -p /app
WORKDIR /app
ADD . /app/

RUN rm yarn.lock || true
RUN rm package-lock.json || true
RUN yarn
RUN yarn build

ENV HOST 0.0.0.0
EXPOSE 8080

CMD [ "yarn", "start"]
