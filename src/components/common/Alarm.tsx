import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface AlarmProps {
  type: string;
  content: string;
  imgUrl?: string;
}

export const Alarm = ({ type, content, imgUrl }: AlarmProps) => {
  const [currentText, setCurrentText] = useState('');

  const handleContent = () => {
    if (type === 'Follow') {
      return setCurrentText(`${content}님이 팔로우하였습니다.`);
    }
    if (type === 'Start') {
      return setCurrentText(`${content}가 시작되었습니다.`);
    }
    if (type === 'End') {
      return setCurrentText(`${content}가 종료되었습니다.`);
    }
  };

  useEffect(() => {
    handleContent();
  }, []);

  return (
    <Wrapper>
      <Icon>
        {imgUrl?.length ? (
          type === 'Follow' ? (
            <img src={imgUrl} alt="Friend Image" width={40} height={40} />
          ) : (
            <img src={imgUrl} alt="Alarm Content" width={16} height={20} />
          )
        ) : (
          <DefaultIcon />
        )}
      </Icon>
      <Content>{currentText}</Content>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  width: 360px;
  height: 72px;
  padding: 16px 21px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.Gray200};
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background-color: ${({ theme: { colors } }) => colors.WeekandBlueSub};
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 12px;
  }
`;

const DefaultIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background-color: ${({ theme: { colors } }) => colors.Gray300};
`;

const Content = styled.span`
  width: 308px;
  height: 22px;
  font-weight: 500;
  font-size: 14px;
  text-align: start;
  line-height: 22px;
  margin-left: 12px;
  color: ${({ theme: { colors } }) => colors.Gray900};
`;
