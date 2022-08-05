import { Dispatch, SetStateAction } from 'react';
import cn from 'classnames';
import { ManipulateType } from 'dayjs';
import styled from 'styled-components';

import { Day } from '@/types';

interface CalenderBodyProps {
  className?: string;
  today: Day;
  date: Day;
  setDate: Dispatch<SetStateAction<Day>>;
  mode: ManipulateType;
}
const weekdays = ['일', '월', '화', '수', '목', '금', '토'];

export const CalenderBody = ({ className, today, date, setDate, mode }: CalenderBodyProps) => {
  const getEndWeek = () => {
    if (date.endOf('month').week() === 1) {
      return 53;
    }
    if (mode === 'month') {
      return date.endOf('month').week() + 1;
    }
    return date.week() + 1;
  };

  const createCalendar = () => {
    const startWeek = mode === 'month' ? date.startOf('month').week() : date.week();
    const endWeek = getEndWeek();
    const calender = [];

    for (let week = startWeek; week < endWeek; week++) {
      calender.push(
        <div className="row" key={week}>
          {Array(7)
            .fill(0)
            .map((_, idx) => {
              const current =
                date.format('MM') === '12'
                  ? date
                      .startOf('week')
                      .week(week - 52)
                      .add(idx, 'day')
                  : date.startOf('week').week(week).add(idx, 'day');
              const isToday = today.format('YYYYMMDD') === current.format('YYYYMMDD');
              const isSelected = date.format('YYYYMMDD') === current.format('YYYYMMDD');
              const isNone = current.format('MM') !== date.format('MM');

              return (
                <div
                  className={cn('box', 'day', isToday && 'today', isNone && 'none')}
                  key={`${week}_${idx}`}
                  onClick={() => {
                    const a = current.set('hour', date.hour()).set('minute', date.minute());
                    setDate(a);
                  }}
                >
                  <span className={cn(isSelected && 'selected')}>{current.format('D')}</span>
                  <BlindText>일</BlindText>
                  {isSelected && <span className="isSelected"></span>}
                </div>
              );
            })}
        </div>
      );
    }
    return calender;
  };

  return (
    <Wrapper className={className}>
      <div className="row">
        {weekdays.map((day) => {
          return <div className="day_name">{day}</div>;
        })}
      </div>
      <Dates>{createCalendar()}</Dates>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme: { fonts } }) => fonts.Body2('Gray400')}

  &.schedule,
  &.repeat_schedule {
    margin-left: -17px;
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  .day_name {
    text-align: center;
    position: relative;
    width: 56px;
  }

  .box {
    padding: 8px 0;
  }
`;

const Dates = styled.div`
  ${({ theme: { fonts } }) => fonts.Body1('Gray900')}

  .day {
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 0;
    width: 56px;
  }

  .day.today {
    color: ${({ theme: { colors } }) => colors.WeekandBlue};
  }

  .selected {
    color: #fff;
    z-index: 20;
  }

  .isSelected {
    position: absolute;
    top: 6px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background: ${({ theme: { colors } }) => colors.WeekandBlue};
  }

  .none {
    color: ${({ theme: { colors } }) => colors.Gray300};
  }
`;

const BlindText = styled.span`
  ${({ theme: { sr_only } }) => sr_only}
`;
