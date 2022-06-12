import styled from 'styled-components';
import { Alarm } from './Alarm';

const alarms = [
  {
    id: 0,
    type: 'Start',
    content: '일하기',
    imgUrl: '../../assets/alarm_icon_clicked.png',
  },
  {
    id: 1,
    type: 'Follow',
    content: '빌리',
    imgUrl: '',
  },
  {
    id: 2,
    type: 'Follow',
    content: 'Ja Morant',
    imgUrl: 'https://img.sbs.co.kr/newimg/news/20220426/201658959_1280.jpg',
  },
  {
    id: 3,
    type: 'End',
    content: '일하기',
    imgUrl: '../../assets/alarm_icon_clicked.png',
  },
  {
    id: 4,
    type: 'Start',
    content: '운동하기',
    imgUrl: '../../assets/alarm_icon_clicked.png',
  },
  {
    id: 5,
    type: 'End',
    content: '운동하기',
    imgUrl: '../../assets/alarm_icon_clicked.png',
  },
];

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
