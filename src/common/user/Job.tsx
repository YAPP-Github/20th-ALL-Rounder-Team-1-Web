import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '@/common';

interface JobProps {
  jobs: string[];
}

export const Job = ({ jobs }: JobProps) => {
  const navigate = useNavigate();

  return (
    <>
      <Title>직업</Title>
      {jobs.length > 0 ? (
        <JobWrapper>
          {jobs.map((job, index) => (
            <p key={index}>{job}</p>
          ))}
        </JobWrapper>
      ) : (
        <AddJobButton
          onClick={() => {
            navigate('/setting');
          }}
        >
          추가하러 가기
        </AddJobButton>
      )}
    </>
  );
};

const Title = styled.div`
  ${({ theme: { fonts } }) => fonts.Head2('Gray700')}
  margin-bottom: 8px;
`;

const AddJobButton = styled(Button)`
  width: 140px;
  padding: 9px 21px 9px 14px;
  ${({ theme: { fonts } }) => fonts.Body2('Gray400')}
  background-color: #fff;
  border-radius: 136px;

  &::before {
    content: '';
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 24, 24)}
    margin: -2px 4px 0 0;
    background-size: 455px 385px;
    background-position: -373px -202px;
  }
`;

const JobWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  p {
    width: 61px;
    height: 22px;
    padding: 8px 14px;
    ${({ theme: { fonts } }) => fonts.Subhead3}
    color: ${({ theme: { colors } }) => colors.WeekandBlue};
    background-color: ${({ theme: { colors } }) => colors.WeekandBlueSub};
    border-radius: 108px;
    text-align: center;
    line-height: 22.4px;
  }
`;
