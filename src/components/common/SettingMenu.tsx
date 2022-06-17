import { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { SettingContext } from '@/contexts';
import { getCurrentSetting } from '@/utils';

interface SettingMenuProps {
  name: string;
  isMenu?: boolean;
  currentClicked: string;
  setCurrentClicked: Dispatch<SetStateAction<string>>;
}

export const SettingMenu = ({
  name,
  isMenu = true,
  currentClicked,
  setCurrentClicked,
}: SettingMenuProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const { setCurrentContent } = useContext(SettingContext);

  const onClick = () => {
    setCurrentClicked(name);
    setCurrentContent(getCurrentSetting(name));
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
