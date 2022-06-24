import { Dispatch, SetStateAction } from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import { Day } from '@/hooks';

interface CalenderBodyProps {
  today: Day;
  date: Day;
  setDate: Dispatch<SetStateAction<Day>>;
}
const weekdays = ['일', '월', '화', '수', '목', '금', '토'];

// TODO: 타입을 받아서 한달 전체를 보여줄지 혹은 한 주만을 보여줄지 결정해야 할 듯
export const CalenderBody = ({ today, date, setDate }: CalenderBodyProps) => {
  const createCalendar = () => {
    const startWeek = date.startOf('month').week();
    const endWeek = date.endOf('month').week() === 1 ? 53 : date.endOf('month').week();
    const calender = [];

    for (let week = startWeek; week < endWeek + 1; week++) {
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
                  className={`box`}
                  key={`${week}_${idx}`}
                  onClick={() => {
                    setDate(current);
                  }}
                >
                  <span className={cn('day', isToday && 'today', isNone && 'none')}>
                    {current.format('D')}
                    <BlindText>일</BlindText>
                  </span>

                  {!isToday && isSelected && <span className="isSelected"></span>}
                </div>
              );
            })}
        </div>
      );
    }
    return calender;
  };

  return (
    <Wrapper>
      <div className="row">
        {weekdays.map((day) => {
          return (
            <div className="box">
              <span className="text">{day}</span>
            </div>
          );
        })}
      </div>
      <Dates>{createCalendar()}</Dates>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    color: ${({ theme: { colors } }) => colors.Gray400};
  }
  .box {
    position: relative;
    width: 13px;
    padding: 8px 0;
  }
`;

const Dates = styled.div`
  .day {
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    line-height: 26px;
    color: ${({ theme: { colors } }) => colors.Gray900};
  }
  .day.today {
    color: ${({ theme: { colors } }) => colors.WeekandBlue};
  }
  .isSelected {
    position: absolute;
    top: 7px;
    left: -9px;
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
