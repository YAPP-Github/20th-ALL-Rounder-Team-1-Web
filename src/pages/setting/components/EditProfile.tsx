import { useState } from 'react';
import styled from 'styled-components';

import { ProfileInfo } from './ProfileInfo';

import { Interest } from '@/common';
import { INTERESTS, JOBS } from '@/utils';

export const EditProfile = () => {
  const userProfile = {
    email: 'example@gmail.com',
    imageUrl: '',
    nickName: '김아무개',
    purpose: 'We can do, Weekand!',
    jobs: ['취준생', '프리랜서'],
    interests: ['N잡', '사업', '자기계발'],
  };

  const { email, imageUrl, nickName, purpose, jobs, interests } = userProfile;

  const [totalJobs, setTotalJobs] = useState<string[]>([...jobs]);
  const [totalInterests, setTotalInterests] = useState<string[]>([...interests]);

  return (
    <>
      <div>
        <img src={imageUrl} alt="User Image" />
        <div>
          <p>{email}</p>
          <button>프로필 사진 바꾸기</button>
        </div>
      </div>
      <ProfileInfo title="닉네임" content={nickName} />
      <ProfileInfo title="한줄목표" content={purpose} />
      {/* <ProfileInfo title="직업" content={totalJobs} />
      <ProfileInfo title="관심사" content={totalInterests} /> */}
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
