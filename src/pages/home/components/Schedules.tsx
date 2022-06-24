import { useState } from 'react';
import styled from 'styled-components';

import { Schedule } from '.';

import { CategorySubMenu } from '@/common';
import { useContextMenu } from '@/hooks';
import { SCHEDULES } from '@/utils';

export const Schedules = () => {
  const [isFriend, setIsFriend] = useState(true);

  const {
    pointX,
    pointY,
    show,
    isCategoryClicked,
    setIsCategoryClicked,
    clickedIndex,
    setClickedIndex,
  } = useContextMenu();

  return (
    <Wrapper>
      {SCHEDULES.map((schedule, index) => (
        <Schedule
          key={index}
          currentIndex={index}
          categoryColor={schedule.categoryColor}
          name={schedule.name}
          process={schedule.process}
          startTime={schedule.startTime}
          endTime={schedule.endTime}
          likeNumber={schedule.likeNumber}
          likeTypes={schedule.likeTypes}
          isFriend={isFriend}
          setIsCategoryClicked={setIsCategoryClicked}
          clickedIndex={clickedIndex}
          setClickedIndex={setClickedIndex}
        />
      ))}
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
