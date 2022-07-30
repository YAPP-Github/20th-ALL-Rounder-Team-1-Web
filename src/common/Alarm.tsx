import styled from 'styled-components';

interface AlarmProps {
  type: string;
  content: string;
}

export const Alarm = ({ content }: AlarmProps) => {
  return (
    <Wrapper>
      <Icon>
        <i className="alarm" />
      </Icon>
      <Content>{content}</Content>
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

const Icon = styled.i`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.WeekandBlueSub};

  .alarm {
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 24, 24)}
    background-position: -421px -10px;
  }
`;

const Content = styled.span`
  width: 308px;
  height: 44px;
  font-weight: 500;
  font-size: 14px;
  text-align: start;
  line-height: 22.4px;
  margin: auto;
  margin-left: 12px;
  color: ${({ theme: { colors } }) => colors.Gray900};
`;
