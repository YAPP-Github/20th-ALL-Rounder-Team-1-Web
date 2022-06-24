import { Schedule } from './components';

import { PageLayout } from '@/common';
import { SCHEDULES } from '@/utils';

const Home = () => {
  return (
    <PageLayout title="홈 페이지" isFooter={false}>
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
        />
      ))}
    </PageLayout>
  );
};

export default Home;
