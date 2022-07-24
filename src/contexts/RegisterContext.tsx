import { createContext, PropsWithChildren, useRef } from 'react';

interface PersonalInformationProps {
  email?: string;
  password?: string;
  nickname?: string;
  jobs?: string[];
  interests?: string[];
}

interface PersonalInformation extends PersonalInformationProps {
  signUpAgreed: true;
}

type RegisterProps = {
  getPersonalInformation: () => void;
  setPersonalInformation: (props: PersonalInformationProps) => void;
};

export const RegisterContext = createContext<RegisterProps>({} as RegisterProps);

export const RegisterContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const personalInformation = useRef<PersonalInformation>({
    email: '',
    password: '',
    nickname: '',
    jobs: [],
    interests: [],
    signUpAgreed: true,
  });

  const getPersonalInformation = () => {
    return personalInformation.current;
  };

  const setPersonalInformation = (props: PersonalInformationProps) => {
    personalInformation.current = {
      ...personalInformation.current,
      ...props,
    };
  };

  return (
    <RegisterContext.Provider value={{ getPersonalInformation, setPersonalInformation }}>
      {children}
    </RegisterContext.Provider>
  );
};
