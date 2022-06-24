import { useState } from 'react';
import styled from 'styled-components';

import { Schedule } from './components';

import { PageLayout } from '@/common';
import { SCHEDULES } from '@/utils';

const Home = () => {
  const [isFriend, setIsFriend] = useState(false);

  return (
    <PageLayout title="홈 페이지" isFooter={false}>
      <Schedules>
        {SCHEDULES.map((schedule, index) => (
          <Schedule
            key={index}
            categoryColor={schedule.categoryColor}
            name={schedule.name}
            process={schedule.process}
            startTime={schedule.startTime}
            endTime={schedule.endTime}
            likeNumber={schedule.likeNumber}
            likeTypes={schedule.likeTypes}
            isFriend={isFriend}
          />
        ))}
      </Schedules>
    </PageLayout>
  );
};

const Schedules = styled.div`
  width: 641px;
  height: 810px;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 20px;
  padding: 32px 0px;
`;

export default Home;
