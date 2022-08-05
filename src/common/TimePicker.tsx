import { Dispatch, SetStateAction, useState } from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import { Button } from '.';

import { Day } from '@/types';

interface TimePickerProps {
  date: Day;
  setDate: Dispatch<SetStateAction<Day>>;
}

export const TimePicker = ({ date, setDate }: TimePickerProps) => {
  const [noon, setNoon] = useState(date.hour() < 13 ? '오전' : '오후');
  const [showHour, setShowHour] = useState(false);
  const [showMinute, setShowMinute] = useState(false);

  const onClickHour = (hour: number) => () => {
    const noonHour = noon === '오전' ? hour : hour + 12;
    const changedHour = date.set('hour', noonHour);
    setDate(changedHour);
    setShowHour(false);
  };

  const onClickMinute = (minute: number) => () => {
    const changedMinute = date.set('minute', minute);
    setDate(changedMinute);
    setShowMinute(false);
  };

  const onClickNoon = () => {
    const currentHour = date.hour();

    if (currentHour === 0) {
      const changedHour = date.set('hour', 12);
      setDate(changedHour);
      setNoon('오후');
      return;
    }

    if (currentHour === 12) {
      const changedHour = date.set('hour', 0);
      setDate(changedHour);
      setNoon('오전');
      return;
    }

    if (noon === '오전') {
      const noonHour = (currentHour + 12) % 24;
      const changedHour = date.set('hour', noonHour);
      setDate(changedHour);
      setNoon('오후');
      return;
    }

    if (noon === '오후') {
      const noonHour = currentHour - 12 < 0 ? currentHour + 12 : currentHour - 12;
      const changedHour = date.set('hour', noonHour);
      setDate(changedHour);
      setNoon('오전');
      return;
    }
  };

  return (
    <Wrapper>
      <TimeButton className="noon" onClick={onClickNoon}>
        {noon}
      </TimeButton>
      <TimeButton className="time" onClick={() => setShowHour(true)}>
        {`${date.format('hh')}시`}
      </TimeButton>
      <TimePickerHour className={cn('hour', showHour && 'show')}>
        {Array(12)
          .fill(undefined)
          .map((_, idx) => idx + 1)
          .map((hour) => {
            return <TimePickerButton onClick={onClickHour(hour)}>{hour}</TimePickerButton>;
          })}
      </TimePickerHour>
      <TimeButton className="time" onClick={() => setShowMinute(true)}>
        {`${date.format('mm')}분`}
      </TimeButton>
      <TimePickerMinute className={cn('minute', showMinute && 'show')}>
        {Array(60)
          .fill(undefined)
          .map((_, idx) => idx)
          .map((minute) => {
            return <TimePickerButton onClick={onClickMinute(minute)}>{minute}</TimePickerButton>;
          })}
      </TimePickerMinute>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const TimeButton = styled(Button)`
  padding: 13px 0 13px 16px;
  background-color: ${({ theme: { colors } }) => colors.Gray200};
  ${({ theme: { fonts } }) => fonts.Body1};
  border-radius: 10px;

  &.noon:after {
    content: '';
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 24, 24)}
    background-size: 455px 385px;
    background-position: -421px -54px;
    margin: 1px 14px 0 9px;
  }

  &.time:after {
    content: '';
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 24, 24)}
    background-size: 455px 385px;
    background-position: -142px -351px;
    margin: 1px 14px 0 9px;
  }

  & ~ & {
    margin-left: 14px;
  }
`;

const TimePickerHour = styled.div`
  position: absolute;
  display: none;
  height: 460px;
  overflow-y: scroll;
  border: 1px solid ${({ theme: { colors } }) => colors.Gray200};
  border-radius: 10px;
  top: 61px;

  &.hour {
    left: 103px;
  }

  &.minute {
    left: 206px;
  }

  &.show {
    display: block;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const TimePickerMinute = styled.div`
  position: absolute;
  display: none;
  height: 460px;
  overflow-y: scroll;
  border: 1px solid ${({ theme: { colors } }) => colors.Gray200};
  border-radius: 10px;
  top: 61px;

  &.hour {
    left: 103px;
  }

  &.minute {
    left: 206px;
  }

  &.show {
    display: block;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const TimePickerButton = styled(Button)`
  ${({ theme: { fonts } }) => fonts.Body1('Gray700')};
  display: block;
  padding: 10px 0;
  width: 85px;
  z-index: 10;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.Gray100};
  }
`;
