import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Alarm } from '.';

import { useNotifications } from '@/api/notification';
import { ALARMS } from '@/utils';

interface IAlarm {
  id: string;
  message: string;
  type: string;
}

export const AlarmList = () => {
  const [alarms, setAlarms] = useState<IAlarm[]>();
  const { notifications } = useNotifications();

  const showNofications = async () => {
    const {
      data: {
        notifications: { notifications: alarms },
      },
    } = await notifications({
      variables: {
        page: 0,
        size: 10,
      },
    });
    setAlarms(alarms);
  };

  useEffect(() => {
    showNofications();
  }, []);

  return (
    <Wrapper>
      {alarms &&
        alarms.map(({ id, type, message }) => <Alarm key={id} type={type} content={message} />)}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  width: 420px;
  height: 515px;
  position: absolute;
  top: 66px;
  right: 268px;
  padding: 24px;
  border-radius: 6px;
  background-color: #fff;
  z-index: 21;
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
