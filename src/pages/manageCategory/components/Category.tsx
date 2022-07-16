import { Dispatch, MouseEvent, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface CategoryProps {
  id: number;
  color: string;
  visibility: string;
  content: string;
  setIsCategoryClicked: Dispatch<SetStateAction<boolean>>;
}

export const Category = ({
  id,
  color,
  visibility,
  content,
  setIsCategoryClicked,
}: CategoryProps) => {
  const navigate = useNavigate();

  const onClickCategory = () => {
    navigate(`/manage-category/${id}`);
  };

  const handleRightClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsCategoryClicked(true);
  };

  return (
    <Wrapper onClick={onClickCategory} onContextMenu={handleRightClick}>
      <Color color={color} />
      <Content>
        <p>{visibility}</p>
        <h1>{content}</h1>
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
