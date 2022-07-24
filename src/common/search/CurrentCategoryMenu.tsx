import { Dispatch, MouseEvent, SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';

interface CurrentCategoryMenuProps {
  currentIndex: number;
  name: string;
  color: string;
  startTime: string;
  endTime: string;
  repeatSelectedValue?: string;
  repeatType: string;
  setIsCategoryClicked: Dispatch<SetStateAction<boolean>>;
  clickedIndex: number;
  setClickedIndex: Dispatch<SetStateAction<number>>;
}

export const CurrentCategoryMenu = ({
  currentIndex,
  name,
  color,
  startTime,
  endTime,
  repeatSelectedValue,
  repeatType,
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

  const getDate = (time: string) => {
    const date = new Date(time);

    return `${date.getFullYear()}.${
      date.getMonth() > 10 ? date.getMonth() : `0${date.getMonth()}`
    }.${date.getDate() > 10 ? date.getDate() : `0${date.getDate()}`}`;
  };

  const getTime = (time: string) => {
    const date = new Date(time);

    return `${date.getHours() > 10 ? date.getHours() : `0${date.getHours()}`}:${
      date.getMinutes() > 10 ? date.getMinutes() : `0${date.getMinutes()}`
    }`;
  };

  const getRepeatType = (repeatType: string) => {
    switch (repeatType) {
      case 'DAILY':
        return '매일';
      case 'WEEKLY':
        return '매주';
      case 'MONTHLY':
        return '매달';
      case 'YEARLY':
        return '매년';
      case 'ONCE':
        return '';
    }
  };

  const getRepeatDay = (repeatSelectedValue: string) => {
    let result = '';
    if (repeatSelectedValue.length) {
      const days = repeatSelectedValue.split(',');
      while (days.length) {
        const currentDay = days.shift();
        switch (currentDay) {
          case 'MONDAY':
            result += '월';
            break;
          case 'TUESDAY':
            result += '화';
            break;
          case 'WEDNESDAY':
            result += '수';
            break;
          case 'THURSDAY':
            result += '목';
            break;
          case 'FRIDAY':
            result += '금';
            break;
          case 'SATURDAY':
            result += '토';
            break;
          case 'SUNDAY':
            result += '일';
            break;
          default:
            result += currentDay;
        }
        if (days.length) {
          result += ', ';
        }
      }
    }
    return result.length > 0 ? result + ' 반복' : result;
  };

  useEffect(() => {
    if (currentIndex === clickedIndex) {
      return setIsClicked(true);
    }
    setIsClicked(false);
  }, [clickedIndex]);

  return (
    <Wrapper onContextMenu={handleRightClick} isClicked={isClicked}>
      <Title color={color}>
        <div />
        <h2>{name}</h2>
      </Title>
      <Time>
        <i className="start_time" />
        <p>{getDate(startTime)}</p>
        <p>{getTime(startTime)}</p>
      </Time>
      <WithPeriod>
        <Time>
          <i className="end_time" />
          <p>{getDate(startTime)}</p>
          <p>{getTime(endTime)}</p>
        </Time>
        <p>{`${getRepeatType(repeatType)} ${getRepeatDay(
          repeatSelectedValue ? repeatSelectedValue : ''
        )}`}</p>
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

const Title = styled.div<{ color: string }>`
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
    background-color: ${({ color }) => color};
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
  }

  i.start_time {
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 16, 16)}
    background-position: -421px -178px;
  }

  i.end_time {
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 16, 16)}
    background-position: -421px -142px;
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
