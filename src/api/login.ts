import { gql, useLazyQuery } from '@apollo/client';

const LOGIN = gql`
  query Login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      accessToken
      refreshToken
    }
  }
`;

export const useLogin = () => {
  const [login] = useLazyQuery(LOGIN);

  return { login };
};
