import { useState } from 'react';
import dayjs from 'dayjs';
import isoWeeek from 'dayjs/plugin/isoWeek';
import weekday from 'dayjs/plugin/weekday';
import weekOfYear from 'dayjs/plugin/weekOfYear';

import { Day } from '@/types';

export const useDate = () => {
  dayjs.extend(weekday);
  dayjs.extend(isoWeeek);
  dayjs.extend(weekOfYear);

  const today = dayjs();
  const [date, setDate] = useState<Day>(dayjs());

  return { today, date, setDate };
};
