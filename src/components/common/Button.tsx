import { ComponentProps } from 'react';
import styled from 'styled-components';

interface ButtonProps extends ComponentProps<'button'> {
  onClick: () => void;
}

export const Button = ({ children, onClick, type = 'button' }: ButtonProps) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: 100px;
  height: 50px;
`;
