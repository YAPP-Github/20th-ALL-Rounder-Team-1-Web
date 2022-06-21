import { ComponentPropsWithoutRef } from 'react';
import cn from 'classnames';
import styled from 'styled-components';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  onClick: () => void;
}

export const Button = ({
  children,
  onClick,
  type = 'button',
  className,
  disabled,
  ...restProps
}: ButtonProps) => {
  return (
    <StyledButton
      className={cn(className && className, disabled && 'disabled')}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  &.login_button {
    border-radius: 10px;
    width: 353px;
    background-color: ${({ theme: { colors } }) => colors.WeekandBlue};
    color: ${({ theme: { colors } }) => colors.Gray200};
    ${({ theme: { fonts } }) => fonts.SubHead1}
    line-height: 60px;
  }

  &.register_button {
    border-radius: 10px;
    width: 353px;
    background-color: ${({ theme: { colors } }) => colors.WeekandBlueSub};
    color: ${({ theme: { colors } }) => colors.WeekandBlue};
    ${({ theme: { fonts } }) => fonts.SubHead1}
    line-height: 60px;
  }

  &.question_button {
    border-radius: 10px;
    width: 110px;
    background-color: ${({ theme: { colors } }) => colors.WeekandBlue};
    color: ${({ theme: { colors } }) => colors.Gray200};
    ${({ theme: { fonts } }) => fonts.SubHead1}
    line-height: 52px;
  }

  &.disabled {
    background-color: ${({ theme: { colors } }) => colors.Gray300};
  }
`;
