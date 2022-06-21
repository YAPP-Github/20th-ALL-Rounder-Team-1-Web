import styled from 'styled-components';

interface ProfileInfoProps {
  title: string;
  content: string;
}

export const ProfileInfo = ({ title, content }: ProfileInfoProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>
        <p>{content}</p>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.p`
  width: 83px;
  text-align: end;
  margin-right: 32px;
  color: ${({ theme: { colors } }) => colors.Gray500};
  ${({ theme: { fonts } }) => fonts.SubHead1}
`;

const Content = styled.div`
  width: 540px;
  height: 28px;
  background-color: ${({ theme: { colors } }) => colors.Gray200};
  border-radius: 10px;
  padding: 12px 18px;
  margin: 18px 0px;

  p {
    color: ${({ theme: { colors } }) => colors.Gray900};
    ${({ theme: { fonts } }) => fonts.SubHead1}
  }
`;
