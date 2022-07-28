import { gql, useLazyQuery } from '@apollo/client';

const CHECK_DUPLICATE_NICKNAME = gql`
  query CheckDuplicateNickname($nickname: String!) {
    checkDuplicateNickname(nickname: $nickname)
  }
`;

export const useChkDuplicateNickname = () => {
  const [check_duplicate_nickname] = useLazyQuery(CHECK_DUPLICATE_NICKNAME);

  return { check_duplicate_nickname };
};

const SEND_AUTH_KEY = gql`
  query SendAuthKey($email: String!) {
    sendAuthKey(email: $email)
  }
`;

export const useSendAuthKey = () => {
  const [sendAuthkey] = useLazyQuery(SEND_AUTH_KEY);

  return { sendAuthkey };
};

const VALID_AUTH_KEY = gql`
  query ValidAuthKey($validAuthKeyInput: ValidAuthKeyInput!) {
    validAuthKey(validAuthKeyInput: $validAuthKeyInput)
  }
`;

export const useValidAuthKey = () => {
  const [validAuthkey] = useLazyQuery(VALID_AUTH_KEY);

  return { validAuthkey };
};
