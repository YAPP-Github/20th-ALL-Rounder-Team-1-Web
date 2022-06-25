import styled from 'styled-components';

import { Alarm } from '.';

import { ALARMS } from '@/utils';

export const AlarmList = () => {
  return (
    <Wrapper>
      {ALARMS.map(({ id, type, content }) => (
        <Alarm key={id} type={type} content={content} />
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
