import { Dispatch, MouseEvent, SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';

interface CurrentCategoryMenuProps {
  currentIndex: number;
  name: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  setIsCategoryClicked: Dispatch<SetStateAction<boolean>>;
  clickedIndex: number;
  setClickedIndex: Dispatch<SetStateAction<number>>;
}

export const CurrentCategoryMenu = ({
  currentIndex,
  name,
  startDate,
  startTime,
  endDate,
  endTime,
  setIsCategoryClicked,
  clickedIndex,
  setClickedIndex,
}: CurrentCategoryMenuProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleRightClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsCategoryClicked(true);
    setClickedIndex(currentIndex);
  };

  useEffect(() => {
    if (currentIndex === clickedIndex) {
      return setIsClicked(true);
    }
    setIsClicked(false);
  }, [clickedIndex]);

  return (
    <Wrapper onContextMenu={handleRightClick} isClicked={isClicked}>
      <Title>
        <div />
        <h2>{name}</h2>
      </Title>
      <Time>
        <img src="../../assets/start_time_icon.png" alt="" />
        <p>{startDate}</p>
        <p>{startTime}</p>
      </Time>
      <WithPeriod>
        <Time>
          <img src="../../assets/end_time_icon.png" alt="" />
          <p>{endDate}</p>
          <p>{endTime}</p>
        </Time>
        <p>매주 화요일 반복</p>
      </WithPeriod>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isClicked: boolean }>`
  width: 578px;
  height: 74px;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.Gray200};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px 26px;
  gap: 2px;
  background-color: ${({ theme: { colors }, isClicked }) => isClicked && colors.WeekandBlueSub};
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  width: 299px;
  height: 26px;
  gap: 11px;
  margin-left: 5px;

  div {
    width: 10px;
    height: 10px;
    border-radius: 3px;
    background-color: #ff9292;
  }

  h2 {
    color: ${({ theme: { colors } }) => colors.Gray900};
    ${({ theme: { fonts } }) => fonts.SubHead2}
  }
`;

const Time = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 157px;
  height: 22px;
  padding: 0px 4px;
  gap: 8px;

  p {
    color: ${({ theme: { colors } }) => colors.Gray500};
    ${({ theme: { fonts } }) => fonts.Body2}
    width: 78px;
  }
`;

const WithPeriod = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: ${({ theme: { colors } }) => colors.Gray500};
    ${({ theme: { fonts } }) => fonts.Body2}
  }
`;
