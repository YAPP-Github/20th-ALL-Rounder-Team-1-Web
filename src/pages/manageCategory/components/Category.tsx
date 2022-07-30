import { Dispatch, MouseEvent, SetStateAction, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { CategoryContext } from '@/contexts';
import { OPEN_TYPE } from '@/models';
import { getOpenTypeKR } from '@/utils';

interface CategoryProps {
  id: number;
  color: string;
  openType: OPEN_TYPE;
  name: string;
  setIsCategoryClicked: Dispatch<SetStateAction<boolean>>;
  setClickedIndex: Dispatch<SetStateAction<number>>;
}

export const Category = ({
  id,
  color,
  openType,
  name,
  setIsCategoryClicked,
  setClickedIndex,
}: CategoryProps) => {
  const navigate = useNavigate();
  const { setCategory } = useContext(CategoryContext);

  const onClickCategory = () => {
    setCategory({
      id: id,
      name: name,
      color: color,
      openType: openType,
    });
    navigate(`/manage-category/${id}`);
  };

  const handleRightClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setCategory({
      name: name,
      color: color,
      openType: openType,
    });
    setIsCategoryClicked(true);
    setClickedIndex(id);
  };

  return (
    <Wrapper onClick={onClickCategory} onContextMenu={handleRightClick}>
      <Color color={color} />
      <Content>
        <p>{getOpenTypeKR(openType)}</p>
        <h1>{name}</h1>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 324px;
  height: 50px;
  border-radius: 10px;
  padding: 12px 14px;
  background-color: #fff;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Color = styled.div<{ color: string }>`
  width: 43px;
  height: 43px;
  border-radius: 8px;
  background-color: ${({ color }) => color};
  margin-right: 12px;
`;

const Content = styled.div`
  text-align: start;
  p {
    color: ${({ theme: { colors } }) => colors.Gray500};
    ${({ theme: { fonts } }) => fonts.Body2}
  }

  h1 {
    color: ${({ theme: { colors } }) => colors.Gray900};
    ${({ theme: { fonts } }) => fonts.SubHead1}
  }
`;
