import { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  onClick: () => void;
}

export const Button = ({ children, onClick, type = 'button', ...restProps }: ButtonProps) => {
  return (
    <StyledButton type={type} onClick={onClick} {...restProps}>
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
`;
