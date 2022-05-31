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
  width: 100px;
  height: 50px;
`;
