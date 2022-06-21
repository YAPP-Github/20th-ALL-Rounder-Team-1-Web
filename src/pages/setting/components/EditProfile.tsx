import { useState } from 'react';
import styled from 'styled-components';

import { Interest } from '@/common';
import { INTERESTS, JOBS } from '@/utils';

export const EditProfile = () => {
  const userProfile = {
    email: 'example@gmail.com',
    imageUrl: '',
    nickName: '김아무개',
    purpose: 'We can do, Weekand!',
    jobs: ['취준생', '프리랜서', '디자인'],
    interests: ['N잡', '사업', '자기계발'],
  };

  const { email, imageUrl, nickName, purpose, jobs, interests } = userProfile;

  const [totalJobs, setTotalJobs] = useState<string[]>([]);
  const [totalInterests, setTotalInterests] = useState<string[]>([]);

  return (
    <>
      <div>
        <img src={imageUrl} alt="User Image" />
        <div>
          <p>{email}</p>
          <button>프로필 사진 바꾸기</button>
        </div>
      </div>
      <div>
        <p>닉네임</p>
        <input type="text" value={'Hi'} />
      </div>
      <div>
        <p>한줄목표</p>
        <input type="text" value={'We can do, Weekand!'} />
      </div>
      <div>
        <p>직업</p>
        <p>{totalJobs}</p>
      </div>
      <div>
        <p>초기화</p>
        {JOBS.map((job) => (
          <Interest
            className="select_interest"
            name={job}
            totalChoices={totalJobs}
            setTotalChoices={setTotalJobs}
          />
        ))}
      </div>
      <div>
        <p>관심사</p>
        <p>{totalInterests}</p>
      </div>
      <div>
        <p>초기화</p>
        {INTERESTS.map((interest) => (
          <Interest
            className="select_interest"
            name={interest}
            totalChoices={totalInterests}
            setTotalChoices={setTotalInterests}
          />
        ))}
      </div>
    </>
  );
};
