import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';

interface SettingMenuProps {
  name: string;
  hasButton?: boolean;
  currentClicked: string;
  setCurrentClicked: Dispatch<SetStateAction<string>>;
}

export const SettingMenu = ({
  name,
  hasButton = true,
  currentClicked,
  setCurrentClicked,
}: SettingMenuProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const onClick = () => {
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
    <Wrapper onClick={onClick}>
      <Title isClicked={isClicked} hasButton={hasButton}>
        {name}
      </Title>
      {hasButton && <img src="../../assets/setting_right_button.png" alt="Setting Right Button" />}
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
  cursor: pointer;
`;

const Title = styled.p<{ isClicked: boolean; hasButton: boolean }>`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme: { colors }, isClicked, hasButton }) =>
    hasButton ? (isClicked ? colors.WeekandBlue : colors.Gray900) : colors.Gray400};
`;
