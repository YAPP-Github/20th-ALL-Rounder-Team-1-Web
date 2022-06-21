import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

import { Button, PageLayout } from '@/common';

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

  return (
    <PageLayout title="비밀번호 찾기 페이지" isHeader={false} isFooter={false}>
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
          onClick={() => {
            navigate('/login');
          }}
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
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 18, 18)}
    margin: 7px 16px 0 0;
    background-size: 310px 270px;

    ${({ checked }) =>
      checked ? `background-position: -224px -236px;` : `background-position: -186px -236px;`}
  }

  .title {
    ${({ theme: { fonts } }) => fonts.Head1}
  }

  .description {
    display: block;
    // 아이콘의 크기가 더 커질 것이기 때문!
    margin: 7px 0 0 40px;
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
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 18, 18)}
    margin: 7px 16px 0 0;
    background-size: 310px 270px;

    ${({ checked }) =>
      checked ? `background-position: -224px -236px;` : `background-position: -186px -236px;`}
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
