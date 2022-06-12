import { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';

interface InterestProps {
  name: string;
  totalChoices: string[];
  setTotalChoices: Dispatch<SetStateAction<string[]>>;
}

export const Interest = ({ name, totalChoices, setTotalChoices }: InterestProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const onClick = () => {
    if (isClicked) {
      const exceptClickedName = totalChoices.filter((totalChoice) => totalChoice !== name);
      setTotalChoices(exceptClickedName);
    } else {
      if (totalChoices.length === 3) {
        return;
      }
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
  background-color: ${({ theme: { colors } }) => colors.WeekandBlueSub};
  color: ${({ theme: { colors } }) => colors.WeekandBlue};
  padding: 8px 16px;
  border-radius: 108px;
  margin: 5px;
  font-size: 16px;
  font-weight: 700;
`;

const NotSelected = styled.button`
  background-color: ${({ theme: { colors } }) => colors.Gray100};
  color: ${({ theme: { colors } }) => colors.Gray400};
  padding: 8px 16px;
  border-radius: 108px;
  margin: 5px;
  font-size: 16px;
  font-weight: 500;
`;
