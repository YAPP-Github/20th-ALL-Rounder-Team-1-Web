import { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';

import { SettingMenu } from '.';

interface SettingSidebarProps {
  setCurrentContent: Dispatch<SetStateAction<JSX.Element>>;
}

export const SettingSidebar = ({ setCurrentContent }: SettingSidebarProps) => {
  const [currentClicked, setCurrentClicked] = useState('프로필 편집');

  return (
    <Wrapper>
      <div>
        <SettingMenu
          name="프로필 편집"
          currentClicked={currentClicked}
          setCurrentClicked={setCurrentClicked}
          setCurrentContent={setCurrentContent}
        />
        <SettingMenu
          name="비밀번호 변경"
          currentClicked={currentClicked}
          setCurrentClicked={setCurrentClicked}
          setCurrentContent={setCurrentContent}
        />
        <SettingMenu
          name="접근성 설정"
          currentClicked={currentClicked}
          setCurrentClicked={setCurrentClicked}
          setCurrentContent={setCurrentContent}
        />
        <SettingMenu
          name="문의하기"
          currentClicked={currentClicked}
          setCurrentClicked={setCurrentClicked}
          setCurrentContent={setCurrentContent}
        />
      </div>
      <div>
        <SettingMenu
          name="로그아웃"
          currentClicked={currentClicked}
          setCurrentClicked={setCurrentClicked}
          isMenu={false}
        />
        <SettingMenu
          name="회원탈퇴"
          currentClicked={currentClicked}
          setCurrentClicked={setCurrentClicked}
          isMenu={false}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  width: 281px;
  height: 916px;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
