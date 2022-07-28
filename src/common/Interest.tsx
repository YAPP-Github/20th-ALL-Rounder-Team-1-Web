import {
  ComponentPropsWithoutRef,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import styled from 'styled-components';

import { Button } from '.';

import { ToastContext } from '@/contexts';

interface InterestProps {
  className: string;
  defaultWhiteBgColor?: boolean;
  interestType: 'job' | 'interest';
  isChosen?: boolean;
  name: string;
  setTotalChoices: Dispatch<SetStateAction<string[]>>;
  totalChoices: string[];
}

const MAX_INTEREST = 3;

export const Interest = ({
  className,
  defaultWhiteBgColor = false,
  interestType,
  isChosen = false,
  name,
  setTotalChoices,
  totalChoices,
  ...restProps
}: InterestProps) => {
  const [isClicked, setIsClicked] = useState(isChosen);

  const { setToast } = useContext(ToastContext);

  const onClick = () => {
    if (isClicked) {
      const exceptClickedName = totalChoices.filter((totalChoice) => totalChoice !== name);
      setIsClicked(false);
      setTotalChoices(exceptClickedName);
      return;
    }

    if (totalChoices.length === MAX_INTEREST) {
      setToast(
        'error',
        `${interestType === 'job' ? '직업은' : '관심사는'} 최대 3개까지 선택할 수 있어요`
      );
      return;
    }

    setIsClicked(true);
    setTotalChoices([...totalChoices, name]);
  };

  return (
    <>
      {isClicked ? (
        <Selected className={className} onClick={onClick} {...restProps}>
          {name}
        </Selected>
      ) : (
        <NotSelected
          className={className}
          onClick={onClick}
          defaultWhiteBgColor={defaultWhiteBgColor}
          {...restProps}
        >
          {name}
        </NotSelected>
      )}
    </>
  );
};

const Selected = styled(Button)`
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
    padding: 8px 14px;
    margin: 5px 4px;
    ${({ theme: { fonts } }) => fonts.SubHead3}
  }

  &.search_interest {
    padding: 8px 16px;
    margin: 6px 5px;
    ${({ theme: { fonts } }) => fonts.SubHead2}
    color: #fff;
    background-color: ${({ theme: { colors } }) => colors.WeekandBlue};
  }
`;

const NotSelected = styled(Button)<{ defaultWhiteBgColor: boolean }>`
  background-color: ${({ theme: { colors }, defaultWhiteBgColor }) =>
    defaultWhiteBgColor ? '#fff' : colors.Gray100};
  color: ${({ theme: { colors } }) => colors.Gray400};
  border-radius: 108px;

  &.select_interest {
    padding: 8px 16px;
    margin: 6px 5px;
    ${({ theme: { fonts } }) => fonts.SubHead2};
    font-weight: 500;
  }

  &.setting_interest {
    padding: 8px 14px;
    margin: 5px 4px;
    ${({ theme: { fonts } }) => fonts.Body2}
  }

  &.search_interest {
    padding: 8px 16px;
    margin: 6px 5px;
    ${({ theme: { fonts } }) => fonts.Body1}
  }
`;
