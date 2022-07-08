import styled from 'styled-components';

interface SearchContentProps {
  imgUrl?: string;
  name: string;
  comment: string;
}

export const SearchContent = ({ imgUrl, name, comment }: SearchContentProps) => {
  return (
    <Wrapper>
      {imgUrl ? <img src={imgUrl} alt={`${name} 이미지`} /> : <div className="default_img" />}
      <Info>
        <p className="name">{name}</p>
        <p className="comment">{comment}</p>
      </Info>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 581px;
  height: 62px;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.Gray200};
  display: flex;
  padding: 16px 30px;
  gap: 2px;

  img {
    width: 60px;
    height: 60px;
    border-radius: 21.38px;
  }

  .default_img {
    width: 60px;
    height: 60px;
    border-radius: 21.38px;
    background-color: ${({ theme: { colors } }) => colors.Gray300};
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  gap: 2px;

  .name {
    ${({ theme: { fonts } }) => fonts.Subhead1}
    color: ${({ theme: { colors } }) => colors.Gray900};
  }

  .comment {
    ${({ theme: { fonts } }) => fonts.Body1}
    color: ${({ theme: { colors } }) => colors.Gray400};
  }
`;
