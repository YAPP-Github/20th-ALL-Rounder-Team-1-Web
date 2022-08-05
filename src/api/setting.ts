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

const SEND_INQUIRY = gql`
  mutation Inquiry($contents: String!) {
    inquiry(contents: $contents)
  }
`;

export const useSendInquiry = () => {
  const [send_inquiry] = useMutation(SEND_INQUIRY);

  return { send_inquiry };
};

const LOGOUT = gql`
  mutation Logout {
    logout
  }
`;

export const useLogout = () => {
  const [logout] = useMutation(LOGOUT);

  return { logout };
};

const DELETE_USER = gql`
  mutation DeleteUser {
    deleteUser
  }
`;

export const useDeleteUser = () => {
  const [delete_user] = useMutation(DELETE_USER);

  return { delete_user };
};

const CREATE_USER_PROFILE_IMAGE = gql`
  mutation CreateUserProfileImageS3PresignedUrl(
    $input: CreateUserProfileImageS3PresignedUrlInput!
  ) {
    createUserProfileImageS3PresignedUrl(input: $input) {
      url
      filename
    }
  }
`;

export const useCreateUserProfileImage = () => {
  const [create_user_profile_img] = useMutation(CREATE_USER_PROFILE_IMAGE);

  return { create_user_profile_img };
};
