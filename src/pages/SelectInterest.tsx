import { Button } from '@/components';
import { JobSelection } from '@/components/common/JobSelection';
import { useState } from 'react';
import styled from 'styled-components';

const SelectInterest = () => {
  const jobs = ['학생', '취준생', '직장인'];
  const interests = ['N잡', '이직'];

  const [example, setExample] = useState(false);

  return (
    <Wrapper>
      <Title>조금 더 알려주시겠어요?</Title>
      <div>
        <div>
          <SubTitle>직업</SubTitle>
          <Description>최대 3개까지 선택할 수 있어요</Description>
        </div>
        {jobs.map((job) => (
          <JobSelection name={job} isClicked={true} setIsClicked={setExample} />
        ))}
      </div>
      <div>
        <div>
          <SubTitle>관심사</SubTitle>
          <Description>최대 3개까지 선택할 수 있어요</Description>
        </div>
        {interests.map((interest) => (
          <JobSelection name={interest} isClicked={example} setIsClicked={setExample} />
        ))}
      </div>
      <Button
        onClick={() => {
          console.log('다음');
        }}
      >
        다음
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1120px;
`;

const Title = styled.h1`
  ${({ theme: { fonts } }) => fonts.Head1}
`;

const SubTitle = styled.h2`
  ${({ theme: { fonts } }) => fonts.Head2}
`;

const Description = styled.span`
  ${({ theme: { fonts } }) => fonts.Body1}
`;

export default SelectInterest;
