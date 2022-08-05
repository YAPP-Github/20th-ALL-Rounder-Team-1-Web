import { Dispatch, SetStateAction, useEffect,useState } from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import { Button, Calender } from '.';

import { REPEAT_TYPE } from '@/models';
import { Day } from '@/types';

interface RepeatScheduleProps {
  today: Day;
  date: Day;
  setDate: Dispatch<SetStateAction<Day>>;
  isNoRepeat: boolean;
  setIsNoRepeat: Dispatch<SetStateAction<boolean>>;
  repeatType: keyof typeof REPEAT_TYPE;
  setRepeatType: Dispatch<SetStateAction<keyof typeof REPEAT_TYPE>>;
  repeatSelectedValue: string[];
  setRepeatSelectedValue: Dispatch<SetStateAction<string[]>>;
}

export const RepeatSchedule = ({
  today,
  date,
  setDate,
  isNoRepeat,
  setIsNoRepeat,
  repeatType,
  setRepeatType,
  repeatSelectedValue,
  setRepeatSelectedValue,
}: RepeatScheduleProps) => {
  useEffect(() => {
    setRepeatType(REPEAT_TYPE.DAILY);
  }, []);

  useEffect(() => {
    if (!isNoRepeat) {
      return;
    }

    setDate(today.subtract(1, 'year'));
  }, [isNoRepeat]);

  const onClickRepeatButton = (type: keyof typeof REPEAT_TYPE) => () => {
    console.log(type);
    setIsNoRepeat(true);
    console.log(type === REPEAT_TYPE.DAILY);
    setRepeatType(type);
  };

  const onClickEveryWeekButton = (day: string) => () => {
    if (repeatSelectedValue.includes(day)) {
      const filteredList = repeatSelectedValue.filter((value) => value !== day);
      setRepeatSelectedValue([...filteredList]);
      return;
    }

    setRepeatSelectedValue([...repeatSelectedValue, day]);
  };

  return (
    <Wrapper>
      <RepeatButtons>
        <RepeatButton
          className={cn(repeatType === REPEAT_TYPE.DAILY && 'selected')}
          onClick={onClickRepeatButton(REPEAT_TYPE.DAILY)}
        >
          매일
        </RepeatButton>
        <RepeatButton
          className={cn(repeatType === REPEAT_TYPE.WEEKLY && 'selected')}
          onClick={onClickRepeatButton(REPEAT_TYPE.WEEKLY)}
        >
          매주
        </RepeatButton>
        <RepeatButton
          className={cn(repeatType === REPEAT_TYPE.MONTHLY && 'selected')}
          onClick={onClickRepeatButton(REPEAT_TYPE.MONTHLY)}
        >
          매월
        </RepeatButton>
        <RepeatButton
          className={cn(repeatType === REPEAT_TYPE.YEARLY && 'selected')}
          onClick={onClickRepeatButton(REPEAT_TYPE.YEARLY)}
        >
          매년
        </RepeatButton>
      </RepeatButtons>
      {repeatType === REPEAT_TYPE.WEEKLY && (
        <EveryWeekButtons>
          <EveryWeekButton
            className={cn(repeatSelectedValue.includes('일') && 'selected')}
            onClick={onClickEveryWeekButton('일')}
          >
            일
          </EveryWeekButton>
          <EveryWeekButton
            className={cn(repeatSelectedValue.includes('월') && 'selected')}
            onClick={onClickEveryWeekButton('월')}
          >
            월
          </EveryWeekButton>
          <EveryWeekButton
            className={cn(repeatSelectedValue.includes('화') && 'selected')}
            onClick={onClickEveryWeekButton('화')}
          >
            화
          </EveryWeekButton>
          <EveryWeekButton
            className={cn(repeatSelectedValue.includes('수') && 'selected')}
            onClick={onClickEveryWeekButton('수')}
          >
            수
          </EveryWeekButton>
          <EveryWeekButton
            className={cn(repeatSelectedValue.includes('목') && 'selected')}
            onClick={onClickEveryWeekButton('목')}
          >
            목
          </EveryWeekButton>
          <EveryWeekButton
            className={cn(repeatSelectedValue.includes('금') && 'selected')}
            onClick={onClickEveryWeekButton('금')}
          >
            금
          </EveryWeekButton>
          <EveryWeekButton
            className={cn(repeatSelectedValue.includes('토') && 'selected')}
            onClick={onClickEveryWeekButton('토')}
          >
            토
          </EveryWeekButton>
        </EveryWeekButtons>
      )}
      <RepeatEndLabel>반복종료</RepeatEndLabel>
      <RepeatEndWrapper className={cn(!isNoRepeat && 'bottom_line')}>
        <NoRepeat isSelected={isNoRepeat} onClick={() => setIsNoRepeat(true)}>
          안 함
        </NoRepeat>
        <SelectEndDate isSelected={!isNoRepeat} onClick={() => setIsNoRepeat(false)}>
          종료날짜 선택
        </SelectEndDate>
      </RepeatEndWrapper>
      {!isNoRepeat && (
        <Calender className="repeat_schedule" today={today} date={date} setDate={setDate} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const RepeatButtons = styled.div`
  width: 355px;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.Gray200};
`;

const RepeatButton = styled(Button)`
  ${({ theme: { fonts } }) => fonts.SubHead1};
  width: 32px;

  & + & {
    margin-left: 24px;
  }

  &.selected:after {
    content: '';
    display: block;
    width: 32px;
    height: 4px;
    background-color: ${({ theme: { colors } }) => colors.WeekandBlue};
    margin-top: 8px;
  }
`;

const RepeatEndLabel = styled.div`
  margin: 27px 0 32px 0;
  font-size: 16px;
  line-height: 26px;
  font-weight: 700;
`;

const NoRepeat = styled.label<{ isSelected: boolean }>`
  display: block;
  margin-bottom: 32px;
  ${({ theme: { fonts } }) => fonts.Body1};

  &:before {
    content: '';
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 24, 24)}
    margin: 1px 10px 0 0;
    background-size: 455px 385px;
    background-position: -10px -351px;

    ${({ isSelected }) =>
      isSelected ? `background-position: -274px -351px;` : `background-position: -230px -351px;`}
  }
`;

const SelectEndDate = styled.label<{ isSelected: boolean }>`
  display: block;
  ${({ theme: { fonts } }) => fonts.Body1};

  &:before {
    content: '';
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 24, 24)}
    margin: 1px 10px 0 0;
    background-size: 455px 385px;
    background-position: -10px -351px;

    ${({ isSelected }) =>
      isSelected ? `background-position: -274px -351px;` : `background-position: -230px -351px;`}
  }
`;

const EveryWeekButtons = styled.div`
  margin-top: 23px;
`;

const EveryWeekButton = styled(Button)`
  padding: 5px 11px;
  ${({ theme: { fonts } }) => fonts.Body1};
  background-color: ${({ theme: { colors } }) => colors.WeekandBlueSub};
  border-radius: 100%;

  & + & {
    margin-left: 12.5px;
  }

  &.selected {
    color: ${({ theme: { colors } }) => colors.Gray100};
    background-color: ${({ theme: { colors } }) => colors.WeekandBlue};
  }
`;

const RepeatEndWrapper = styled.div`
  padding-bottom: 16px;

  &.bottom_line {
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.Gray200};
  }
`;
