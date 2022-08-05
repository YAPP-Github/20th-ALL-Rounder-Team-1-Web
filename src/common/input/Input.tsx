import { ComponentPropsWithoutRef, forwardRef, useImperativeHandle, useRef } from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import { useChkDuplicateNickname, useSendAuthKey, useValidAuthKey } from '@/api';
import { Validation } from '@/types';
import { checkCertificateNumber, checkEmail, checkNicknameValidation } from '@/utils';
export interface InputRef {
  value: string;
  chkValidation: (type: string) => Promise<Validation>;
}

// 여기에서 setState 함수를 받아서 처리하는 형태로 바꿔야 할듯
type InputProps = ComponentPropsWithoutRef<'input'>;

export const Input = forwardRef<InputRef, InputProps>(
  ({ type = 'text', placeholder, className, ...restProps }, ref) => {
    const imperativeRef = ref;
    const inputRef = useRef<HTMLInputElement>(null);

    const { sendAuthkey } = useSendAuthKey();
    const { check_duplicate_nickname } = useChkDuplicateNickname();
    const { validAuthkey } = useValidAuthKey();

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
        async chkValidation(type: string) {
          if (type === 'checkEmail') {
            const emailValidation = checkEmail(inputRef.current?.value!);

            if (emailValidation.type === 'error') {
              return emailValidation;
            }

            const { data, error } = await sendAuthkey({
              variables: {
                email: inputRef.current?.value,
              },
            });

            if (data) {
              return { type: 'success', message: '유효한 이메일입니다' };
            }

            return { type: 'error', message: error!.message };
          }

          if (type === 'checkCertificateNumber') {
            const email = (document.querySelector('#email') as HTMLInputElement).value;
            const {
              data: { validAuthKey },
            } = await validAuthkey({
              variables: {
                validAuthKeyInput: {
                  authKey: inputRef.current?.value,
                  email,
                },
              },
            });

            return checkCertificateNumber(validAuthKey);
          }

          if (type === 'checkNickname') {
            const {
              data: { checkDuplicateNickname },
            } = await check_duplicate_nickname({
              variables: {
                nickname: inputRef.current?.value,
              },
            });

            return checkNicknameValidation(checkDuplicateNickname);
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
  border: 0;
  background-color: ${({ theme: { colors } }) => colors.Gray200};
  border-radius: 12px;
  box-sizing: border-box;
  ${({ theme: { fonts } }) => fonts.Body1};

  &.login_input {
    width: 353px;
    padding: 13px 20px;
    ::placeholder {
      color: #aaaeb6;
    }
  }

  &.category_input {
    width: 440px;
    border: 0;
    padding: 13px 16px;
  }

  &.schedule_input {
    width: 327px;
    border: 0;
    padding: 13px 16px;
  }
`;
