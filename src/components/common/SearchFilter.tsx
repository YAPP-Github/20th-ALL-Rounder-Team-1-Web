import { useState } from 'react';
import styled from 'styled-components';

interface SearchFilterProps {
  jobs: string[];
}

export const SearchFilter = ({ jobs }: SearchFilterProps) => {
  const [selectedJobs, setSelectedJobs] = useState<string[]>([]);

  const onClickAddJob = (job: string) => {
    const isCurrentJobExist = selectedJobs.find((selectedJob) => selectedJob === job);
    if (isCurrentJobExist) {
      const filteredCurrentJob = selectedJobs.filter((selectedJob) => selectedJob !== job);
      return setSelectedJobs(filteredCurrentJob);
    }
    return setSelectedJobs([...selectedJobs, job]);
  };

  const onClickReset = () => {
    return setSelectedJobs([]);
  };

  const onClickSubmit = () => {
    // 필터링된 직업 기반 검색 관련 api
  };

  const checkCertainJobExist = (job: string) => {
    const isCurrentJobExist = selectedJobs.find((selectedJob) => selectedJob === job);
    return isCurrentJobExist ? true : false;
  };

  return (
    <div>
      <div>
        <h1>직업</h1>
        <button onClick={onClickReset}>초기화</button>
      </div>
      <div>
        {jobs.map((job) => (
          <button key={job} onClick={() => onClickAddJob(job)}>
            {checkCertainJobExist(job) ? (
              <SelectedJob>{job}</SelectedJob>
            ) : (
              <NotSelectedJob>{job}</NotSelectedJob>
            )}
          </button>
        ))}
      </div>
      <button onClick={onClickSubmit}>확인</button>
    </div>
  );
};

const SelectedJob = styled.p`
  background-color: #0000ff;
  border: 1px solid #0000ff;
  color: #ffffff;
`;

const NotSelectedJob = styled.p`
  background-color: #ffffff;
  border: 1px solid #0000ff;
  color: #0000ff;
`;
