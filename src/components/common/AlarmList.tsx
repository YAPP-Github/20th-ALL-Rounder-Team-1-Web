import styled from 'styled-components';

import { Alarm } from '@/components';
import { getAlarms } from '@/utils';

const alarms = getAlarms(); // 추후에 서버가 제작되면 실제 데이터로 변경

export const AlarmList = () => {
  return (
    <Wrapper>
      {alarms.map((alarm) => (
        <Alarm key={alarm.id} type={alarm.type} content={alarm.content} imgUrl={alarm.imgUrl} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  width: 420px;
  height: 500px;
  position: absolute;
  top: 76px;
  left: 832px;
  padding: 24px;
  border-radius: 6px;
  background-color: #fff;
  z-index: 2;
  box-shadow: 5.320000171661377px 7.980000019073486px 26.600000381469727px 0px #0000000f;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme: { colors } }) => colors.Gray300};
    border-radius: 54px;
  }

  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }
`;
