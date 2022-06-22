import { useState } from 'react';
import styled from 'styled-components';

import { Interest } from './components';

import { Button, PageLayout } from '@/common';
import { getInterests, getJobs } from '@/utils';

const SelectInterest = () => {
  const jobs = getJobs(); // 나중에 서버가 완성되면 해당 정보를 불러오는 방식으로 수정 예정
  const interests = getInterests(); // 나중에 서버가 완성되면 해당 정보를 불러오는 방식으로 수정 예정

  const [totalJobs, setTotalJobs] = useState<string[]>([]);
  const [totalInterests, setTotalInterests] = useState<string[]>([]);

  return (
    <PageLayout title="관심사 페이지" isHeader={false} isFooter={false}>
      <Main role="main">
        <Title>조금 더 알려주시겠어요?</Title>
        <SubContentWrapper>
          <ExplanationWrapper>
            <SubTitle>직업</SubTitle>
            <Condition>최대 3개까지 선택할 수 있어요</Condition>
          </ExplanationWrapper>
          {jobs.map((job) => (
            <Interest name={job} totalChoices={totalJobs} setTotalChoices={setTotalJobs} />
          ))}
        </SubContentWrapper>
        <SubContentWrapper>
          <ExplanationWrapper>
            <SubTitle>관심사</SubTitle>
            <Condition>최대 3개까지 선택할 수 있어요</Condition>
          </ExplanationWrapper>
          {interests.map((interest) => (
            <Interest
              name={interest}
              totalChoices={totalInterests}
              setTotalChoices={setTotalInterests}
            />
          ))}
        </SubContentWrapper>
        <ButtonWrapper>
          <Button
            className="login_button"
            onClick={() => {
              console.log('다음'); // 다음 페이지가 완성됨에 따라 다음 페이지 연결
            }}
          >
            다음
          </Button>
        </ButtonWrapper>
      </Main>
    </PageLayout>
  );
};

const Main = styled.div`
  padding: 176px 0px;
  text-align: start;
`;

const Title = styled.h1`
  ${({ theme: { fonts } }) => fonts.Head1}
`;

const SubContentWrapper = styled.div`
  margin-top: 50px;
`;

const ExplanationWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
`;

const SubTitle = styled.h2`
  ${({ theme: { fonts } }) => fonts.Head2}
`;

const Condition = styled.span`
  ${({ theme: { fonts } }) => fonts.Body1}
`;

const ButtonWrapper = styled.div`
  margin-top: 120px;
  text-align: center;
`;

export default SelectInterest;
