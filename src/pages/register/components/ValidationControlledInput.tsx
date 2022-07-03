import { ComponentPropsWithRef, Dispatch, SetStateAction, useEffect, useState } from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import { Button } from '@/common';
import { Validation } from '@/types';
import { checkPassword, checkPasswordConfirm } from '@/utils';

interface BasicInputProps extends ComponentPropsWithRef<'input'> {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  type?: string;
  htmlFor: string;
  label: string;
  validation: Validation;
  setValidation: Dispatch<SetStateAction<Validation>>;
}

interface PasswordProps extends BasicInputProps {
  validationType: string;
  password?: never;
}

interface PasswordConfirmProps extends BasicInputProps {
  validationType: 'password_confirm';
  password: string;
}

type InputProps = PasswordProps | PasswordConfirmProps;

export const ValidationControlledInput = ({
  value,
  setValue,
  className,
  htmlFor,
  label,
  placeholder,
  type = 'text',
  validationType,
  validation,
  setValidation,
  password,
  ...restProps
}: InputProps) => {
  const [inputType, setInputType] = useState(type);

  useEffect(() => {
    if (validationType === 'password') {
      const validation = checkPassword(value);
      setValidation(validation);
      return;
    }
    if (validationType === 'password_confirm') {
      const validation = checkPasswordConfirm(value, password || '');
      setValidation(validation);
      return;
    }
  }, [value]);

  return (
    <Wrapper>
      <Labels>
        <ValidationLabel htmlFor={htmlFor}>{label}</ValidationLabel>
        {validation.message && (
          <ValidationMessage className={cn(validation.type && validation.type)}>
            {validation.message}
          </ValidationMessage>
        )}
      </Labels>
      <StyledInput
        id={htmlFor}
        type={inputType}
        className={cn('login_input', className && className)}
        placeholder={placeholder}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        {...restProps}
      />
      <ShowPassword
        className={inputType}
        onClick={() => {
          const toggleType = inputType === 'password' ? 'text' : 'password';
          setInputType(toggleType);
        }}
      >
        <BlindText>{inputType === 'password' ? '비밀번호 보이기' : '비밀번호 가리기'}</BlindText>
      </ShowPassword>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  text-align: left;
`;

const Labels = styled.div`
  margin-bottom: 6px;
`;

const ValidationLabel = styled.label`
  ${({ theme: { fonts } }) => fonts.Body2('Gray800')};
`;

const ValidationMessage = styled.span`
  margin-left: 12px;
  ${({ theme: { fonts } }) => fonts.Body2};

  &.normal {
    color: ${({ theme: { colors } }) => colors.Gray500};
  }

  &.success {
    color: ${({ theme: { colors } }) => colors.WeekandBlue};
  }

  &.error {
    color: ${({ theme: { colors } }) => colors.WeekandRed};
  }
`;

const StyledInput = styled.input`
  &.login_input {
    width: 353px;
    border: 0;
    background-color: ${({ theme: { colors } }) => colors.Gray200};
    padding: 13px 20px;
    border-radius: 12px;
    box-sizing: border-box;
    ${({ theme: { fonts } }) => fonts.Body1};
    ::placeholder {
      color: #aaaeb6;
    }
  }
`;

const ShowPassword = styled(Button)`
  &:after {
    position: absolute;
    right: 0;
    content: '';
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 24, 24)}
    margin: 14px 28px 0 0;
    background-size: 455px 385px;
  }
  &.password:after {
    background-position: -98px -351px;
  }
  &.text:after {
    background-position: -54px -351px;
  }
`;

const BlindText = styled.span`
  ${({ theme: { sr_only } }) => sr_only}
`;
