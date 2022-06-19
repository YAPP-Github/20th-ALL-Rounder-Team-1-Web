import { ComponentPropsWithoutRef, forwardRef, useImperativeHandle, useRef } from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import { checkCertificateNumber, checkEmail, checkNickname } from '@/utils';
export interface InputRef {
  value: string;
  chkValidation: (type: string) => { type: string; message: string };
}

// 여기에서 setState 함수를 받아서 처리하는 형태로 바꿔야 할듯
type InputProps = ComponentPropsWithoutRef<'input'>;

export const Input = forwardRef<InputRef, InputProps>(
  ({ type = 'text', placeholder, className, ...restProps }, ref) => {
    const imperativeRef = ref;
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(
      imperativeRef,
      () => ({
        get value() {
          return inputRef?.current?.value || '';
        },
        set value(value: string) {
          if (!inputRef.current) {
            return;
          }
          inputRef.current.value = value;
        },
        chkValidation(type: string) {
          if (type === 'checkEmail') {
            return checkEmail(inputRef.current?.value!);
          }
          if (type === 'checkCertificateNumber') {
            return checkCertificateNumber(inputRef.current?.value!);
          }
          if (type === 'checkNickname') {
            return checkNickname(inputRef.current?.value!);
          }
          return { type: '', message: '' };
        },
      }),
      [ref]
    );

    return (
      <StyledInput
        ref={inputRef}
        className={cn(className && className)}
        type={type}
        placeholder={placeholder}
        {...restProps}
      />
    );
  }
);

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
