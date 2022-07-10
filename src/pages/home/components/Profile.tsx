import styled from 'styled-components';

export const Profile = () => {
  return (
    <Wrapper>
      <Informations>
        <Name>본입입니다</Name>
        <Email>thd6576@naver.com</Email>
      </Informations>
      <ImageWrapper>
        <img src="" alt="" width={80} height={80} />
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
`;
