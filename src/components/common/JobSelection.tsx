import { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';

interface JobSelectionProps {
  name: string;
  totalChoices: string[];
  setTotalChoices: Dispatch<SetStateAction<string[]>>;
}

export const JobSelection = ({ name, totalChoices, setTotalChoices }: JobSelectionProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const onClick = () => {
    if (isClicked) {
      const exceptClickedName = totalChoices.filter((totalChoice) => totalChoice !== name);
      setTotalChoices(exceptClickedName);
    } else {
      setTotalChoices([...totalChoices, name]);
    }
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
  color: #fff;
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
