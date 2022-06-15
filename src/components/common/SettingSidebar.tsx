import { useState } from 'react';
import styled from 'styled-components';

import { SettingMenu } from '@/components';

export const SettingSidebar = () => {
  const [currentClicked, setCurrentClicked] = useState('프로필 편집');

  return (
    <Wrapper>
      <SettingMenu
        name="프로필 편집"
        currentClicked={currentClicked}
        setCurrentClicked={setCurrentClicked}
      />
      <SettingMenu
        name="비밀번호 변경"
        currentClicked={currentClicked}
        setCurrentClicked={setCurrentClicked}
      />
      <SettingMenu
        name="접근성 설정"
        currentClicked={currentClicked}
        setCurrentClicked={setCurrentClicked}
      />
      <SettingMenu
        name="문의하기"
        currentClicked={currentClicked}
        setCurrentClicked={setCurrentClicked}
      />
      <SettingMenu
        name="로그아웃"
        currentClicked={currentClicked}
        setCurrentClicked={setCurrentClicked}
        hasButton={false}
      />
      <SettingMenu
        name="회원탈퇴"
        currentClicked={currentClicked}
        setCurrentClicked={setCurrentClicked}
        hasButton={false}
      />
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  width: 281px;
  height: 878px;
  border-radius: 10px;
  background-color: #fff;
`;
