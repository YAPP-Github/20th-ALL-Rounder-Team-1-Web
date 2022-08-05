import dayjs from 'dayjs';

import { OPEN_TYPE } from '@/models';

export interface Validation {
  type: string;
  message: string;
}

export interface ICategory {
  color: string;
  id: string;
  name: string;
  openType: OPEN_TYPE;
}

export type Day = ReturnType<typeof dayjs>;
