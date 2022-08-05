import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useDeleteUser, useLogout } from '@/api/setting';
import { deleteStorage, getCurrentSetting } from '@/utils';

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

  const { logout } = useLogout();
  const { delete_user } = useDeleteUser();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    deleteStorage('accessToken');
    deleteStorage('refreshToken');
  };

  const handleDeleteUser = async () => {
    await delete_user();
    deleteStorage('accessToken');
    deleteStorage('refreshToken');
  };

  const onClick = () => {
    const content = getCurrentSetting(name);
    if (content && setCurrentContent) {
      setCurrentContent(content);
    }
    setCurrentClicked(name);
    if (name === '로그아웃') {
      if (confirm('로그아웃 하시겠습니까?')) {
        handleLogout();
        alert('로그아웃 되었습니다.');
        navigate('/login');
        return;
      }
      alert('취소합니다.');
    }
    if (name === '회원탈퇴') {
      if (confirm('회원탈퇴 하시겠습니까?')) {
        handleDeleteUser();
        alert('회원탈퇴 되었습니다.');
        navigate('/login');
        return;
      }
      alert('취소합니다.');
    }
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
  width: 201px;
  height: 29px;
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
