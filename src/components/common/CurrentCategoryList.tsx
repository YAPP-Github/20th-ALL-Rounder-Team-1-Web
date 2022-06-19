import { useState } from 'react';
import styled from 'styled-components';
import { CurrentCategoryMenu } from './CurrentCategoryMenu';
import { SearchBar } from './SearchBar';

const certainCategories = [
  {
    name: '운동',
    startDate: '2022.05.21.',
    startTime: '06:00',
    endDate: '2022.05.28.',
    endTime: '08:00',
    period: '매주 화요일 반복',
  },
  {
    name: '운동',
    startDate: '2022.05.21.',
    startTime: '06:00',
    endDate: '2022.05.28.',
    endTime: '08:00',
    period: '매주 화요일 반복',
  },
  {
    name: '운동',
    startDate: '2022.05.21.',
    startTime: '06:00',
    endDate: '2022.05.28.',
    endTime: '08:00',
    period: '매주 화요일 반복',
  },
  {
    name: '운동',
    startDate: '2022.05.21.',
    startTime: '06:00',
    endDate: '2022.05.28.',
    endTime: '08:00',
    period: '매주 화요일 반복',
  },
];

export const CurrentCategoryList = () => {
  const [currentSort, setCurrentSort] = useState('최신순');
  const [isSortOpen, setIsSortOpen] = useState(false);

  const onClickSort = () => {
    setIsSortOpen(!isSortOpen);
  };

  const onClickSortType = (name: string) => {
    setCurrentSort(name);
    setIsSortOpen(false);
  };

  return (
    <Wrapper>
      <SearchBar />
      <Options>
        <p>공개여부 · nn개의 일정</p>
        <Sorting>
          <h1 onClick={onClickSort}>{currentSort}</h1>
          {isSortOpen && (
            <SortMenu>
              <li onClick={() => onClickSortType('최신순')}>최신순</li>
              <li onClick={() => onClickSortType('오래된순')}>오래된순</li>
              <li onClick={() => onClickSortType('오름차순')}>오름차순</li>
              <li onClick={() => onClickSortType('내림차순')}>내림차순</li>
            </SortMenu>
          )}
        </Sorting>
      </Options>
      <div>
        {certainCategories.map((category) => (
          <CurrentCategoryMenu
            name={category.name}
            startDate={category.startDate}
            startTime={category.startTime}
            endDate={category.endDate}
            endTime={category.endTime}
          />
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 582px;
  height: 844px;
  margin-top: 38px;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px 24px;
`;

const Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 28px;
  position: relative;

  p {
    color: ${({ theme: { colors } }) => colors.WeekandBlue};
    ${({ theme: { fonts } }) => fonts.Body2}
  }

  &::before {
    content: '';
    position: absolute;
    right: 14px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid ${({ theme: { colors } }) => colors.Gray700};
  }
`;

const Sorting = styled.div`
  appearance: none;
  border: 1px solid ${({ theme: { colors } }) => colors.Gray200};
  cursor: pointer;
  width: 68px;
  height: 28px;
  border-radius: 10px;
  padding: 8px 16px;
  display: flex;
  align-items: center;

  h1 {
    color: ${({ theme: { colors } }) => colors.Gray700};
    ${({ theme: { fonts } }) => fonts.Body1}
  }
`;

const SortMenu = styled.ul`
  position: absolute;
  top: 50px;
  right: 0px;
  background-color: #fff;
  width: 118px;
  height: 184px;
  border-radius: 10px;
  border: 1px solid ${({ theme: { colors } }) => colors.Gray200};

  li {
    height: 26px;
    padding: 10px 20px;
    color: ${({ theme: { colors } }) => colors.Gray700};
    ${({ theme: { fonts } }) => fonts.Body1}
  }

  li:hover {
    background-color: ${({ theme: { colors } }) => colors.Gray100};
  }
`;
