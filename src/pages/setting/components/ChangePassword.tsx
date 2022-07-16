import { useState } from 'react';
import styled from 'styled-components';

import { Button, ValidationControlledInput } from '@/common';

export const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('');

  return (
    <Wrapper>
      <Title>
        비밀번호를 변경하여
        <br />
        안전하게 관리하세요
      </Title>
      <Description>비밀번호는 숫자, 영어 조합 8자리 이상 입력해주세요</Description>
      <ValidationControlledInput
        value={currentPassword}
        setValue={setCurrentPassword}
        htmlFor="password"
        label="현재 비밀번호"
        placeholder="비밀번호를 입력해주세요"
        type="password"
        validationType="setting"
      />
      <ValidationControlledInput
        value={newPassword}
        setValue={setNewPassword}
        htmlFor="password"
        label="새 비밀번호"
        placeholder="비밀번호를 입력해주세요"
        type="password"
        validationType="setting"
      />
      <ValidationControlledInput
        value={newPasswordConfirm}
        setValue={setNewPasswordConfirm}
        htmlFor="password"
        label="비밀번호 확인"
        placeholder="비밀번호를 입력해주세요"
        type="password"
        validationType="setting"
      />
      <ButtonWrapper>
        <Button
          className="change_password"
          onClick={() => {
            console.log(1);
          }}
        >
          완료
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 739px;
  padding: 60px 40px 356px;
  border-radius: 10px;
  background-color: #fff;

  div.inline + div.inline {
    margin-top: 50px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  line-height: 36px;
  font-weight: 700;
  color: ${({ theme: { colors } }) => colors.Gray900};
`;

const Description = styled.div`
  ${({ theme: { fonts } }) => fonts.Body1('Gray500')}
  margin: 20px 0 66px;
`;

const ButtonWrapper = styled.div`
  margin: 36px 0 0 138px;
`;
