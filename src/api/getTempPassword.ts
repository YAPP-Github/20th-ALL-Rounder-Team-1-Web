import { gql, useMutation } from '@apollo/client';

const ISSUE_TEMP_PASSWORD = gql`
  mutation IssueTempPassword($input: IssueTempPasswordInput!) {
    issueTempPassword(input: $input)
  }
`;

export const useGetTempPassword = () => {
  const [issue_temp_password] = useMutation(ISSUE_TEMP_PASSWORD);
  return { issue_temp_password };
};
