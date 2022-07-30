import { OPEN_TYPE } from '@/models';

export const getOpenTypeKR = (openType: OPEN_TYPE) => {
  if (openType === OPEN_TYPE.ALL_OPEN) {
    return '전체공개';
  }

  if (openType === OPEN_TYPE.FOLLOWER_OPEN) {
    return '친구공개';
  }

  return '비공개';
};
