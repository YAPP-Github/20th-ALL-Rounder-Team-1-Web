import { gql, useLazyQuery, useMutation } from '@apollo/client';

const USER_INFO = gql`
  query UserInfo($id: ID) {
    user(id: $id) {
      id
      email
      nickname
      profileImageUrl
      goal
      jobs
      interests
    }
  }
`;

export const useUserInfo = () => {
  const [user_info, { data }] = useLazyQuery(USER_INFO);

  return { user_info, data };
};

const CHECK_DUPLICATE_NICKNAME = gql`
  query CheckDuplicateNickname($nickname: String!) {
    checkDuplicateNickname(nickname: $nickname)
  }
`;

export const useCheckDuplicateNickname = () => {
  const [check_duplicate_nickname, { data }] = useLazyQuery(CHECK_DUPLICATE_NICKNAME);

  return { check_duplicate_nickname, data };
};

const UPDATE_USER_PROFILE = gql`
  mutation UpdateUserProfile($input: UpdateUserProfileInput!) {
    updateUserProfile(input: $input) {
      id
      email
      nickname
      profileImageUrl
      followerCount
      followeeCount
      jobs
      interests
      followed
    }
  }
`;

export const useUpdateUserProfile = () => {
  const [update_user_profile] = useMutation(UPDATE_USER_PROFILE);

  return { update_user_profile };
};

const UPDATE_PASSWORD = gql`
  mutation UpdatePassword($passwordInput: PasswordInput!) {
    updatePassword(passwordInput: $passwordInput)
  }
`;

export const useUpdatePassword = () => {
  const [update_password] = useMutation(UPDATE_PASSWORD);

  return { update_password };
};
