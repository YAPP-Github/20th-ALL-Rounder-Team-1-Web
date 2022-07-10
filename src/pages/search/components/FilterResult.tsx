import { useState } from 'react';
import styled from 'styled-components';

import { Interest } from '@/common';
import { INTERESTS, JOBS } from '@/utils';

export const FilterResult = () => {
  const [isJobClicked, setIsJobClicked] = useState(false);
  const [isInterestClicked, setIsInterestClicked] = useState(false);
  const [totalJobs, setTotalJobs] = useState<string[]>([]);
  const [totalInterests, setTotalInterests] = useState<string[]>([]);

  const onClickJob = () => {
    setIsInterestClicked(false);
    setIsJobClicked(!isJobClicked);
  };

  const onClickInterest = () => {
    setIsJobClicked(false);
    setIsInterestClicked(!isInterestClicked);
  };

  const totalCount = (total: string[]) => {
    return total.length > 0 ? total.length : '';
  };

  const isChosen = (currentKeyword: string, total: string[]) => {
    return total.includes(currentKeyword);
  };

  return (
    <Wrapper>
      <FilterButtons>
        <button className="filter-button" onClick={onClickJob}>
          <p className="filter-category">직업</p>
          <p className="total-count">{totalCount(totalJobs)}</p>
          <i className={isJobClicked ? 'up' : 'down'} />
        </button>
        <button className="filter-button" onClick={onClickInterest}>
          <p className="filter-category">관심사</p>
          <p className="total-count">{totalCount(totalInterests)}</p>
          <i className={isInterestClicked ? 'up' : 'down'} />
        </button>
      </FilterButtons>
      <div>
        {isJobClicked && (
          <JobWrapper>
            {JOBS.map((job) => (
              <Interest
                className="select_interest"
                name={job}
                totalChoices={totalJobs}
                setTotalChoices={setTotalJobs}
                isChosen={isChosen(job, totalJobs)}
              />
            ))}
          </JobWrapper>
        )}
        {isInterestClicked && (
          <JobWrapper>
            {INTERESTS.map((interest) => (
              <Interest
                className="select_interest"
                name={interest}
                totalChoices={totalInterests}
                setTotalChoices={setTotalInterests}
                isChosen={isChosen(interest, totalInterests)}
              />
            ))}
          </JobWrapper>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 124px;
  margin-left: 60px;
`;

const FilterButtons = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 41px;

  button.filter-button {
    height: 44px;
    padding: 6px 12px;
    border-radius: 8px;
    background-color: #fff;
    margin-right: 16px;
    display: flex;
    align-items: center;
  }

  p {
    font-size: 16px;
    line-height: 25.6px;
  }

  p.filter-category {
    font-weight: 500;
    color: ${({ theme: { colors } }) => colors.Gray700};
    margin-right: 6px;
  }

  .total-count {
    font-weight: 700;
    color: ${({ theme: { colors } }) => colors.WeekandBlue};
  }

  i.down {
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 32, 32)}
    background-position: -114px -199px;
  }

  i.up {
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 32, 32)}
    background-position: -166px -199px;
  }
`;

const JobWrapper = styled.div`
  width: 384px;
`;
