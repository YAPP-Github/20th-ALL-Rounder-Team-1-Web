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
}

interface PasswordProps extends BasicInputProps {
  validation: Validation;
  setValidation: Dispatch<SetStateAction<Validation>>;
  validationType: 'password';
  password?: never;
}

interface PasswordConfirmProps extends BasicInputProps {
  validation: Validation;
  setValidation: Dispatch<SetStateAction<Validation>>;
  validationType: 'password_confirm';
  password: string;
}

interface ChangePasswordProps extends BasicInputProps {
  validation?: Validation;
  setValidation?: Dispatch<SetStateAction<Validation>>;
  validationType: 'setting';
  password?: never;
}

type InputProps = PasswordProps | PasswordConfirmProps | ChangePasswordProps;

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
    if (!setValidation) {
      return;
    }

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

  const isInline = validationType === 'setting';

  return (
    <Wrapper className={cn(isInline && 'inline')}>
      <Labels className={cn(isInline && 'inline')}>
        <ValidationLabel className={cn(isInline && 'inline')} htmlFor={htmlFor}>
          {label}
        </ValidationLabel>
        {validation && validation.message && (
          <ValidationMessage className={cn(validation.type && validation.type)}>
            {validation.message}
          </ValidationMessage>
        )}
      </Labels>
      <StyledInput
        id={htmlFor}
        type={inputType}
        className={cn('login_input', isInline && 'inline', className && className)}
        placeholder={placeholder}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        {...restProps}
      />
      <ShowPassword
        className={cn(inputType, isInline && 'inline')}
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

  &.inline {
    display: flex;
    padding-right: 25px;
  }
`;

const Labels = styled.div`
  margin-bottom: 6px;

  &.inline {
    margin: 12px 32px 0 0;
  }
`;

const ValidationLabel = styled.label`
  ${({ theme: { fonts } }) => fonts.Body2('Gray800')};

  &.inline {
    text-align: right;
    display: inline-block;
    width: 106px;
    ${({ theme: { fonts } }) => fonts.SubHead1('Gray500')};
  }
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

  &.inline {
    box-sizing: border-box;
    width: 576px;
    padding: 13px 28px 13px 16px;
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

  &.inline:after {
    margin: 0;
    top: 14px;
    right: 52px;
  }
`;

const BlindText = styled.span`
  ${({ theme: { sr_only } }) => sr_only}
`;
