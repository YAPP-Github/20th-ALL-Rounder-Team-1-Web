import styled from 'styled-components';

interface ProfileProps {
  nickname: string;
  email: string;
  profileImageUrl: string;
}

export const Profile = ({ nickname, email, profileImageUrl }: ProfileProps) => {
  return (
    <Wrapper>
      <Informations>
        <Name>{nickname}</Name>
        <Email>{email}</Email>
      </Informations>
      <ImageWrapper>
        <img src={profileImageUrl} alt={nickname} width={80} height={80} />
      </ImageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 31px 0;

  &:after {
    ${({ theme: { clearFloat } }) => clearFloat}
  }
`;

const Informations = styled.div`
  float: left;
`;

const Name = styled.div`
  ${({ theme: { fonts } }) => fonts.Head1};
  margin-bottom: 16px;
  width: 310px;
`;

const Email = styled.span`
  ${({ theme: { fonts } }) => fonts.Body1('Gray500')};
`;

const ImageWrapper = styled.div`
  float: right;
  background-color: ${({ theme: { colors } }) => colors.Gray300};
  border-radius: 24px;

  img {
    border-radius: 24px;
  }
`;
