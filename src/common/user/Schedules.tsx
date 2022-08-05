import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Schedule } from '.';

import { useSchedules } from '@/api';
import { CategorySubMenu } from '@/common';
import { useContextMenu } from '@/hooks';
import { SCHEDULES } from '@/utils';

interface ICategory {
  id: string;
  color: string;
  openType: string;
}

interface ISchedules {
  id: string;
  name: string;
  status: string;
  category: ICategory;
  dateTimeStart: number;
  dateTimeEnd: number;
  stickerCount: number;
  stickerNames: string[];
}

interface SchedulesProps {
  userId: string;
  date: number;
}

export const Schedules = ({ userId, date }: SchedulesProps) => {
  const [isFriend, setIsFriend] = useState(true);
  const [userSchedules, setUserSchedules] = useState<ISchedules[]>([]);
  const { schedules } = useSchedules();

  const {
    pointX,
    pointY,
    show,
    isCategoryClicked,
    setIsCategoryClicked,
    clickedIndex,
    setClickedIndex,
  } = useContextMenu();

  const showSchedules = async () => {
    const {
      data: {
        schedules: { schedules: userSchedules },
      },
    } = await schedules({
      variables: {
        date,
        userId,
      },
    });

    setUserSchedules(userSchedules);
  };

  useEffect(() => {
    showSchedules();
  }, [userId, date]);

  return (
    <Wrapper>
      {userSchedules.length === 0 ? (
        <BlankImage>
          <img src="../../assets/blank_schedule.png" alt="Blank Schedule" />
          <p>일정을 만들어보세요!</p>
        </BlankImage>
      ) : (
        <>
          {userSchedules.map(
            (
              {
                id,
                name,
                status,
                category: { color },
                dateTimeStart,
                dateTimeEnd,
                stickerCount,
                stickerNames,
              },
              index
            ) => (
              <Schedule
                key={id}
                currentIndex={index}
                categoryColor={color}
                name={name}
                process={status}
                startTime={dateTimeStart}
                endTime={dateTimeEnd}
                likeNumber={stickerCount}
                likeTypes={stickerNames}
                isFriend={isFriend}
                setIsCategoryClicked={setIsCategoryClicked}
                clickedIndex={clickedIndex}
                setClickedIndex={setClickedIndex}
              />
            )
          )}
        </>
      )}

      {show && (
        <CategorySubMenu
          isCategoryClicked={isCategoryClicked}
          pointX={pointX}
          pointY={pointY}
          isSubMenu={true}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 641px;
  height: 810px;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 20px;
  padding: 32px 0px;
`;

const BlankImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16.42px;
  margin-top: 228px;

  p {
    ${({ theme: { fonts } }) => fonts.Body1}
    color: ${({ theme: { colors } }) => colors.Gray400};
  }
`;
