import { useContext, useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import { useUpdateCategory } from '@/api';
import { Button, Input, InputRef } from '@/common';
import { CategoryContext, PopUpContext, ToastContext } from '@/contexts';
import { OPEN_TYPE } from '@/models';

const colors = [
  '#ff9292',
  '#ffb27a',
  '#ffe600',
  '#94eb9c',
  '#67dbff',
  '#83a5ff',
  '#c881ff',
  '#ffa6a6',
  '#ffc59b',
  '#fff178',
  '#b6eebc',
  '#a6e9ff',
  '#b1c7ff',
  '#d4aaff',
  '#ffc8c8',
  '#ffdec7',
  '#fff7ac',
  '#d8f5db',
  '#cff3ff',
  '#d8e2ff',
  '#e9d3ff',
];

export const Category = () => {
  const { getCategory } = useContext(CategoryContext);
  const { setIsPopped } = useContext(PopUpContext);
  const { setToast } = useContext(ToastContext);

  const [selectedOpenType, setSelectedOpenType] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const categoryName = useRef<InputRef>(null);

  const { id, name, color, openType } = getCategory();

  const { update_category } = useUpdateCategory();

  useEffect(() => {
    setSelectedOpenType(openType);
    setSelectedColor(color);
    categoryName.current!.value = name;
  }, [openType, color, name]);

  const closePopup = () => {
    setIsPopped(false);
  };

  const onCickUpdateCategory = async () => {
    try {
      await update_category({
        variables: {
          categoryId: id,
          scheduleCategoryInput: {
            name: categoryName.current?.value,
            color: selectedColor,
            openType: selectedOpenType,
          },
        },
      });
      closePopup();
    } catch (error) {
      if (error instanceof Error) {
        setToast('error', error.message);
      }
    }
  };

  return (
    <>
      <Title>카테고리</Title>
      <CloseButton onClick={closePopup}></CloseButton>
      <CategoryName>
        <CategoryLabel htmlFor="category">카테고리 이름</CategoryLabel>
        <Input className="category_input" id="category" ref={categoryName} />
      </CategoryName>
      <OpenType>
        <OpenTypeLabel>공개</OpenTypeLabel>
        <OpenTypeButton
          className={cn(selectedOpenType === OPEN_TYPE.ALL_OPEN && 'selected')}
          onClick={() => {
            setSelectedOpenType(OPEN_TYPE.ALL_OPEN);
          }}
        >
          전체공개
        </OpenTypeButton>
        <OpenTypeButton
          className={cn(selectedOpenType === OPEN_TYPE.FOLLOWER_OPEN && 'selected')}
          onClick={() => {
            setSelectedOpenType(OPEN_TYPE.FOLLOWER_OPEN);
          }}
        >
          친구공개
        </OpenTypeButton>
        <OpenTypeButton
          className={cn(selectedOpenType === OPEN_TYPE.CLOSED && 'selected')}
          onClick={() => {
            setSelectedOpenType(OPEN_TYPE.CLOSED);
          }}
        >
          비공개
        </OpenTypeButton>
      </OpenType>
      <Colors>
        <ColorsLabel>색상</ColorsLabel>
        {colors.map((color) => {
          return (
            <ColorButton
              className={cn(color === selectedColor && 'selected')}
              backgroundColor={color}
              onClick={() => {
                setSelectedColor(color);
              }}
            />
          );
        })}
      </Colors>
      <CategoryChangeButton onClick={onCickUpdateCategory}>완료</CategoryChangeButton>
    </>
  );
};

const Title = styled.h1`
  ${({ theme: { fonts } }) => fonts.Title};
  width: 440px;
`;

const CloseButton = styled(Button)`
  &:after {
    content: '';
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 24, 24)}
    background-size: 455px 385px;
    background-position: -362px -351px;
    position: fixed;
    top: 21px;
    right: 24px;
  }
`;

const CategoryName = styled.div`
  margin-top: 39px;
`;

const CategoryLabel = styled.label`
  display: block;
  margin-bottom: 6px;
  ${({ theme: { fonts } }) => fonts.Body2};
`;

const OpenType = styled.div`
  margin-top: 24px;
`;

const OpenTypeLabel = styled.div`
  margin-bottom: 6px;
  ${({ theme: { fonts } }) => fonts.Body2};
`;

const OpenTypeButton = styled(Button)`
  padding: 10px 16px;
  background-color: ${({ theme: { colors } }) => colors.Gray100};
  border-radius: 10px;
  ${({ theme: { fonts } }) => fonts.SubHead3};
  color: ${({ theme: { colors } }) => colors.Gray400};

  & + & {
    margin-left: 12px;
  }

  &.selected {
    background-color: ${({ theme: { colors } }) => colors.WeekandBlueSub};
    color: ${({ theme: { colors } }) => colors.WeekandBlue};
  }
`;

const Colors = styled.div`
  width: 448px;
  margin: 24px -4px -6px;
`;

const ColorsLabel = styled.div`
  ${({ theme: { fonts } }) => fonts.Body2};
`;

const ColorButton = styled(Button)<{ backgroundColor: string }>`
  margin: 6px;
  width: 52px;
  height: 36px;
  border-radius: 5px;
  background-color: ${({ backgroundColor }) => backgroundColor};

  &.selected {
    border: 3px solid ${({ theme: { colors } }) => colors.WeekandBlue};
    border-radius: 5px;
  }
`;

const CategoryChangeButton = styled(Button)`
  margin: 270px 0 0 324.5px;
  ${({ theme: { fonts } }) => fonts.SubHead1};
  width: 115.5px;
  padding: 11.5px 41.75px;
  border-radius: 10px;
  color: ${({ theme: { colors } }) => colors.Gray200};
  background-color: ${({ theme: { colors } }) => colors.WeekandBlue};
`;
