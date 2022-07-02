import {
  ComponentPropsWithRef,
  Dispatch,
  forwardRef,
  MutableRefObject,
  SetStateAction,
} from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import { Button, Input, InputRef } from '@/common';
import { Validation } from '@/types';

interface InputProps extends ComponentPropsWithRef<'input'> {
  buttonText: string;
  htmlFor: string;
  label: string;
  type?: string;
  validationType: string;
  validation: Validation;
  setValidation: Dispatch<SetStateAction<Validation>>;
  buttonDisabled?: boolean;
}

export const ValidationUncontrolledInput = forwardRef<InputRef, InputProps>(
  (
    {
      buttonText,
      className,
      htmlFor,
      label,
      placeholder,
      type = 'text',
      validationType,
      validation,
      setValidation,
      buttonDisabled,
      ...restProps
    },
    ref
  ) => {
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
        <Input
          id={htmlFor}
          type={type}
          className={cn('login_input', className && className)}
          placeholder={placeholder}
          {...restProps}
          ref={ref}
        />
        <ValidationButton
          disabled={buttonDisabled}
          onClick={() => {
            const validation = (ref as MutableRefObject<InputRef>).current?.chkValidation(
              validationType
            );
            setValidation(validation);
          }}
        >
          {buttonText}
        </ValidationButton>
      </Wrapper>
    );
  }
);

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

  &.success {
    color: ${({ theme: { colors } }) => colors.WeekandBlue};
  }

  &.error {
    color: ${({ theme: { colors } }) => colors.WeekandRed};
  }
`;

const ValidationButton = styled(Button)`
  position: absolute;
  right: 4px;
  top: 32px;
  width: 72px;
  height: 44px;
  ${({ theme: { fonts } }) => fonts.Body2};
  color: #fff;
  background: ${({ theme: { colors } }) => colors.WeekandBlue};
  border-radius: 8px;
`;
