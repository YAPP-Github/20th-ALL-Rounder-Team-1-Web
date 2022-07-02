import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Button, Interest, PageLayout } from '@/common';
import { INTERESTS, JOBS } from '@/utils';

const SelectInterest = () => {
  const navigate = useNavigate();

  const [totalJobs, setTotalJobs] = useState<string[]>([]);
  const [totalInterests, setTotalInterests] = useState<string[]>([]);

  return (
    <PageLayout isHeader={false} isFooter={false}>
      <Main role="main">
        <Title>조금 더 알려주시겠어요?</Title>
        <SubContentWrapper>
          <ExplanationWrapper>
            <SubTitle>직업</SubTitle>
            <Condition>최대 3개까지 선택할 수 있어요</Condition>
          </ExplanationWrapper>
          {JOBS.map((job) => (
            <Interest
              className="select_interest"
              name={job}
              totalChoices={totalJobs}
              setTotalChoices={setTotalJobs}
            />
          ))}
        </SubContentWrapper>
        <SubContentWrapper>
          <ExplanationWrapper>
            <SubTitle>관심사</SubTitle>
            <Condition>최대 3개까지 선택할 수 있어요</Condition>
          </ExplanationWrapper>
          {INTERESTS.map((interest) => (
            <Interest
              className="select_interest"
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
              navigate('/agreement');
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
