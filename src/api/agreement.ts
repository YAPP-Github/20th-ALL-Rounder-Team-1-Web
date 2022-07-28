import { gql, useMutation } from '@apollo/client';

const SIGN_UP = gql`
  mutation SignUp($signUpInput: SignUpInput!) {
    signUp(signUpInput: $signUpInput)
  }
`;

export const useSignUp = () => {
  const [sign_up] = useMutation(SIGN_UP);

  return { sign_up };
};
