import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

import { useSignUp } from '@/api';
import { Button, PageLayout } from '@/common';
import { RegisterContext } from '@/contexts';

const AGREEMENTS = [
  {
    id: 'agreement0',
    linkText: '이용약관',
    linkURL: 'https://www.naver.com',
  },
  {
    id: 'agreement1',
    linkText: '개인정보 취급방식',
    linkURL: 'https://www.naver.com',
  },
];

const Agreement = () => {
  const navigate = useNavigate();
  const { sign_up } = useSignUp();
  const { getPersonalInformation } = useContext(RegisterContext);

  const [chkAllAgreements, setChkAllAgreements] = useState(false);
  const [chkAgreements, setChkAgreements] = useState(new Array(AGREEMENTS.length).fill(false));

  useEffect(() => {
    if (chkAgreements.every((_) => _)) {
      setChkAllAgreements(true);
      return;
    }
    setChkAllAgreements(false);
  }, [chkAgreements]);

  const toggleAllAgreement = () => {
    if (chkAllAgreements) {
      setChkAllAgreements(false);
      const next = chkAgreements.map((_) => false);
      setChkAgreements(next);
      return;
    }
    setChkAllAgreements(true);
    const next = chkAgreements.map((_) => true);
    setChkAgreements(next);
  };

  const toggleAgreement = (idx: number) => () => {
    const prev = [...chkAgreements];
    prev[idx] = !prev[idx];
    setChkAgreements(prev);
  };

  const chkButtonDisabled = () => {
    return chkAgreements.some((chkAgreement) => chkAgreement === false);
  };

  const onClickSignUp = async () => {
    const { data } = await sign_up({
      variables: {
        signUpInput: getPersonalInformation(),
      },
    });
    navigate('/login');
  };

  return (
    <PageLayout isHeader={false} isFooter={false}>
      <Main role="main">
        <Title>
          Weekand
          <br />
          서비스 약관에 동의해주세요
        </Title>
        <CheckAll>
          <Input
            type="checkbox"
            id="chkall"
            name="chkall"
            checked={chkAllAgreements}
            onChange={toggleAllAgreement}
          />
          <CheckAllLabel htmlFor="chkall" checked={chkAllAgreements}>
            <span className="title">전체 동의</span>
            <span className="description">약관 비동의 시 서비스 이용이 불가합니다.</span>
          </CheckAllLabel>
        </CheckAll>
        <Separator />
        {AGREEMENTS.map(({ id, linkText, linkURL }, idx) => {
          return (
            <CheckAgreement key={id}>
              <Input
                type="checkbox"
                id={id}
                name={id}
                checked={chkAgreements[idx]}
                onChange={toggleAgreement(idx)}
              />
              <CheckAgreementLabel htmlFor={id}>
                <Icon checked={chkAgreements[idx]} />
                <a className="label_link" href={linkURL} target="_blank">
                  {linkText}
                </a>
                에 동의합니다.
              </CheckAgreementLabel>
            </CheckAgreement>
          );
        })}
        <LoginLinkButton
          className="login_button"
          disabled={chkButtonDisabled()}
          onClick={onClickSignUp}
        >
          로그인 하러가기
        </LoginLinkButton>
      </Main>
    </PageLayout>
  );
};

export default Agreement;

const Main = styled.div`
  width: 354px;
  margin: 0 auto;
  margin-top: calc((100vh - 530px) / 2);
  text-align: left;
`;

const Title = styled.h1`
  ${({ theme: { fonts } }) => fonts.Title};
`;

const Input = styled.input`
  ${({ theme: { sr_only } }) => sr_only}
`;

const CheckAll = styled.span`
  display: block;
  margin-top: 81px;
`;

const Separator = styled.div`
  margin: 32px 0;
  width: 353px;
  height: 1px;
  background-color: ${({ theme: { colors } }) => colors.Gray200};
`;

const CheckAllLabel = styled.label<{ checked: boolean }>`
  &:before {
    content: '';
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 32, 32)}
    margin: 1px 12px 0 0;
    background-size: 455px 385px;

    ${({ checked }) =>
      checked ? `background-position: -62px -199px;` : `background-position: -10px -199px;`}
  }

  .title {
    ${({ theme: { fonts } }) => fonts.Head1}
  }

  .description {
    display: block;
    margin: 7px 0 0 44px;
    ${({ theme: { fonts } }) => fonts.SubHead2('Gray500')}
  }
`;

const CheckAgreement = styled.div`
  & + & {
    margin-top: 20px;
  }
`;

const Icon = styled.i<{ checked: boolean }>`
  &:before {
    content: '';
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 32, 32)}
    margin: 1px 16px 0 0;
    background-size: 455px 385px;

    ${({ checked }) =>
      checked ? `background-position: -62px -199px;` : `background-position: -10px -199px;`}
  }
`;

const CheckAgreementLabel = styled.label`
  ${({ theme: { fonts } }) => fonts.SubHead2('Gray500')}

  .label_link {
    color: ${({ theme: { colors } }) => colors.WeekandBlue};
  }
`;

const LoginLinkButton = styled(Button)`
  margin-top: 60px;
`;
