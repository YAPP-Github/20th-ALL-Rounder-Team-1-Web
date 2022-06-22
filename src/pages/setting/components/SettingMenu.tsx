import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';

import { getCurrentSetting } from '@/utils';

interface SettingMenuProps {
  name: string;
  isMenu?: boolean;
  currentClicked: string;
  setCurrentClicked: Dispatch<SetStateAction<string>>;
  setCurrentContent?: Dispatch<SetStateAction<JSX.Element>>;
}

export const SettingMenu = ({
  name,
  isMenu = true,
  currentClicked,
  setCurrentClicked,
  setCurrentContent,
}: SettingMenuProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const onClick = () => {
    const content = getCurrentSetting(name);
    if (content && setCurrentContent) {
      setCurrentContent(content);
    }
    setCurrentClicked(name);
  };

  const handleIsClicked = () => {
    if (name === currentClicked) {
      return setIsClicked(true);
    }
    setIsClicked(false);
  };

  useEffect(() => {
    handleIsClicked();
  }, [currentClicked]);

  return (
    <Wrapper>
      <Title onClick={onClick} isClicked={isClicked} isMenu={isMenu}>
        {name}
      </Title>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  width: 232px;
  height: 64px;
  padding: 16px 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.p<{ isClicked: boolean; isMenu: boolean }>`
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  color: ${({ theme: { colors }, isClicked, isMenu }) =>
    isMenu ? (isClicked ? colors.WeekandBlue : colors.Gray900) : colors.Gray400};
`;
