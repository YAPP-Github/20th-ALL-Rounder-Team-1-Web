import { useState } from 'react';

interface SearchFilterProps {
  jobs: string[];
}

export const SearchFilter = ({ jobs }: SearchFilterProps) => {
  const [selectedJobs, setSelectedJobs] = useState<string[]>([]);

  const onClick = (job: string) => {
    setSelectedJobs([...selectedJobs, job]);
  };

  console.log(selectedJobs);

  return (
    <div>
      {jobs.map((job) => (
        <button key={job} onClick={() => onClick(job)}>
          {job}
        </button>
      ))}
    </div>
  );
};
