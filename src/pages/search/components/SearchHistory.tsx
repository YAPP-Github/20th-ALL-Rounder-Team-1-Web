import styled from 'styled-components';

import { SEARCH_HISTORIES } from '@/utils';

export const SearchHistory = () => {
  return (
    <Wrapper>
      <Title>
        <p>최근 검색어</p>
        <button>전체 삭제</button>
      </Title>
      <div>
        {SEARCH_HISTORIES.map((searchHistory) => (
          <SearchContent>
            <p>{searchHistory}</p>
            <i className="delete" />
          </SearchContent>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 107px;
  left: 25px;
  width: 518px;
  height: 346px;
  border-radius: 10px;
  background-color: #fff;
  padding: 20px 32px;
  box-shadow: 8px 8px 32px rgba(43, 55, 87, 0.12);
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  p {
    ${({ theme: { fonts } }) => fonts.Subhead2}
    color: ${({ theme: { colors } }) => colors.Gray600};
  }
  button {
    ${({ theme: { fonts } }) => fonts.Body1}
    color: ${({ theme: { colors } }) => colors.Gray400};
  }
`;

const SearchContent = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  i.delete {
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 24, 24)}
    background-position: -362px -351px;
  }
`;
