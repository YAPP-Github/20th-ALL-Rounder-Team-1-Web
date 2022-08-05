import { Dispatch, SetStateAction } from 'react';
import cn from 'classnames';
import { ManipulateType } from 'dayjs';
import styled from 'styled-components';

import { Day } from '@/hooks';

import { Button } from '..';
interface CalerderHeaderProps {
  className?: string;
  today: Day;
  date: Day;
  setDate: Dispatch<SetStateAction<Day>>;
  mode: ManipulateType;
  setMode: Dispatch<SetStateAction<ManipulateType>>;
}

export const CalenderHeader = ({
  className,
  today,
  date,
  setDate,
  mode,
  setMode,
}: CalerderHeaderProps) => {
  const changeDate = (date: Day, changeString: string) => () => {
    switch (changeString) {
      case 'add':
        return setDate(date.add(1, mode));
      case 'subtract':
        return setDate(date.subtract(1, mode));
      default:
        return date;
    }
  };

  const isMakeSchedule = className === 'schedule' || className === 'repeat_schedule';

  return (
    <StyledHeader>
      <span className="thisMonth">
        {mode === 'week'
          ? `${date.format('M')}월 ${date.week() - date.startOf('month').week() + 1}주차`
          : `${date.format('YYYY')}년 ${date.format('M')}월`}
      </span>
      {!isMakeSchedule && (
        <ToggleCalenderButton
          className={cn(mode === 'month' && 'month')}
          onClick={() => {
            if (mode === 'week') {
              setMode('month');
              return;
            }
            setMode('week');
          }}
        ></ToggleCalenderButton>
      )}
      <WrapperButtons>
        {!isMakeSchedule && (
          <Button
            className="today"
            onClick={() => {
              setDate(today);
            }}
          >
            오늘
          </Button>
        )}
        <Button className="previous_icon" onClick={changeDate(date, 'subtract')}></Button>
        <Button className="next_icon" onClick={changeDate(date, 'add')}></Button>
      </WrapperButtons>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  margin-bottom: 25px;

  .thisMonth {
    ${({ theme: { fonts } }) => fonts.SubHead1};
    display: inline-block;
    vertical-align: top;
    margin: 3px 0 4px 1px;
  }
`;

const ToggleCalenderButton = styled(Button)`
  &:before {
    content: '';
    margin-left: 8px;
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 36, 36)}
    background-size: 455px 385px;
    background-position: -66px -143px;
  }

  &.month::before {
    background-position: -10px -143px;
  }
`;

const WrapperButtons = styled.div`
  float: right;
  display: inline-block;
  vertical-align: top;

  .today {
    padding: 7px 16px;
    background-color: ${({ theme: { colors } }) => colors.WeekandBlueSub};
    border-radius: 8px;
    ${({ theme: { fonts } }) => fonts.Body2('WeekandBlue')};
  }

  .previous_icon {
    margin-left: 32px;
  }

  .previous_icon::before {
    content: '';
    margin: 2px 0;
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 32, 32)}
    background-size: 455px 385px;
    background-position: -218px -251px;
  }

  .next_icon::before {
    content: '';
    margin: 2px 0 0 16px;
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 32, 32)}
    background-size: 455px 385px;
    background-position: -321px -10px;
  }
`;
