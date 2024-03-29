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

const REISSUE = gql`
  query Reissue {
    reissue {
      accessToken
    }
  }
`;

export const useReissue = () => {
  const [reissue] = useLazyQuery(REISSUE);

  return { reissue };
};
