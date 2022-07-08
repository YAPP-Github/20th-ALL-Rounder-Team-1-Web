import { ComponentPropsWithoutRef, Dispatch, SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';

interface InterestProps extends ComponentPropsWithoutRef<'button'> {
  name: string;
  totalChoices: string[];
  setTotalChoices: Dispatch<SetStateAction<string[]>>;
  isChosen?: boolean;
}

export const Interest = ({
  name,
  totalChoices,
  setTotalChoices,
  isChosen = false,
  ...restProps
}: InterestProps) => {
  const [isClicked, setIsClicked] = useState(isChosen);

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

  useEffect(() => {
    if (totalChoices.length === 0) {
      setIsClicked(false);
    }
  }, [totalChoices]);

  return (
    <>
      {isClicked ? (
        <Selected onClick={onClick} {...restProps}>
          {name}
        </Selected>
      ) : (
        <NotSelected onClick={onClick} {...restProps}>
          {name}
        </NotSelected>
      )}
    </>
  );
};

const Selected = styled.button`
  background-color: ${({ theme: { colors } }) => colors.WeekandBlueSub};
  color: ${({ theme: { colors } }) => colors.WeekandBlue};
  border-radius: 108px;

  &.select_interest {
    padding: 8px 16px;
    margin: 6px 5px;
    ${({ theme: { fonts } }) => fonts.SubHead2};
    font-weight: 700;
  }

  &.setting_interest {
    padding: 8px 16px;
    margin: 6px 5px;
    ${({ theme: { fonts } }) => fonts.SubHead3}
  }
`;

const NotSelected = styled.button`
  background-color: ${({ theme: { colors } }) => colors.Gray100};
  color: ${({ theme: { colors } }) => colors.Gray400};
  border-radius: 108px;

  &.select_interest {
    padding: 8px 16px;
    margin: 6px 5px;
    ${({ theme: { fonts } }) => fonts.SubHead2};
    font-weight: 500;
  }

  &.setting_interest {
    padding: 8px 16px;
    margin: 6px 5px;
    ${({ theme: { fonts } }) => fonts.Body2}
  }
`;
