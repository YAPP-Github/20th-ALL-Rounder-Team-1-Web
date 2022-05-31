import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface JobSelectionProps {
  name: string;
  isClicked: boolean;
  setIsClicked: Dispatch<SetStateAction<boolean>>;
}

export const JobSelection = ({ name, isClicked, setIsClicked }: JobSelectionProps) => {
  const onClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      {isClicked ? (
        <Selected onClick={onClick}>{name}</Selected>
      ) : (
        <NotSelected onClick={onClick}>{name}</NotSelected>
      )}
    </>
  );
};

const Selected = styled.button`
  background-color: #00f;
  border: 1px solid #00f;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 20px;
`;

const NotSelected = styled.button`
  background-color: #fff;
  border: 1px solid #00f;
  color: #00f;
  padding: 10px 20px;
  border-radius: 20px;
`;
