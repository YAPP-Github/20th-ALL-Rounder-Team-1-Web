import { useState } from 'react';
import styled from 'styled-components';

import { Button, Interest, PageLayout } from '@/components';

const SelectInterest = () => {
  const jobs = [
    '학생',
    '취준생',
    '직장인',
    '프리랜서',
    '경영',
    '사무',
    '마케팅',
    'IT',
    '디자인',
    '무역',
    '유통',
    '영업',
    '서비스',
    '연구원',
    '제조',
    '관광',
    '교육',
    '건설',
    '의료',
    '연예',
    '미디어',
    '전문직',
    '특수직',
    '사업',
    '주부',
  ]; // 나중에 서버가 완성되면 해당 정보를 불러오는 방식으로 수정 예정
  const interests = [
    'N잡',
    '이직',
    '구직',
    '스터디',
    '연구',
    '기획',
    '마케팅',
    '디자인',
    '개발',
    '외국어',
    'SNS',
    '사업',
    '경제',
    '반려동물',
    '봉사',
    '자기계발',
    '문화생활',
    '영화',
    '음악',
    '독서',
    '글쓰기',
    '게임',
    '운동',
    '여행',
  ]; // 나중에 서버가 완성되면 해당 정보를 불러오는 방식으로 수정 예정

  const [totalJobs, setTotalJobs] = useState<string[]>([]);
  const [totalInterests, setTotalInterests] = useState<string[]>([]);

  return (
    <PageLayout title="관심사 페이지" isHeader={false} isFooter={false}>
      <Wrapper>
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
      </Wrapper>
    </PageLayout>
  );
};

const Wrapper = styled.div`
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
