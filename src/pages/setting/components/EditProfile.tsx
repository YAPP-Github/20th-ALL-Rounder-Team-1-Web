import { useState } from 'react';
import styled from 'styled-components';

import { ProfileInfo } from './ProfileInfo';

import { Button, Interest } from '@/common';
import { INTERESTS, JOBS } from '@/utils';

export const EditProfile = () => {
  const userProfile = {
    email: 'giannis@gmail.com',
    imageUrl:
      'https://fadeawayworld.net/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgyMDU2NzMyMTM3MzY2NjU5/giannis.jpg',
    nickName: 'Greek Freak',
    purpose: 'We can do, Weekand!',
    jobs: ['취준생', '프리랜서'],
    interests: ['N잡', '사업', '자기계발'],
  };

  const { email, imageUrl, nickName, purpose, jobs, interests } = userProfile;

  const [totalJobs, setTotalJobs] = useState<string[]>([...jobs]);
  const [totalInterests, setTotalInterests] = useState<string[]>([...interests]);

  return (
    <>
      <ImageAndEmail>
        <img src={imageUrl} alt="User Image" />
        <div>
          <p>{email}</p>
          <button>프로필 사진 바꾸기</button>
        </div>
      </ImageAndEmail>
      <ProfileInfo title="닉네임" content={nickName} />
      <ProfileInfo title="한줄목표" content={purpose} />
      <ProfileInfo title="직업" content={totalJobs.join(', ')} />
      <SelectInterests>
        <p>초기화</p>
        <div>
          {JOBS.map((job) => (
            <Interest
              className="setting_interest"
              name={job}
              totalChoices={totalJobs}
              setTotalChoices={setTotalJobs}
            />
          ))}
        </div>
      </SelectInterests>
      <ProfileInfo title="관심사" content={totalInterests.join(', ')} />
      <SelectInterests>
        <p>초기화</p>
        <div>
          {INTERESTS.map((interest) => (
            <Interest
              className="setting_interest"
              name={interest}
              totalChoices={totalInterests}
              setTotalChoices={setTotalInterests}
            />
          ))}
        </div>
      </SelectInterests>
      <ButtonWrapper>
        <Button className="question_button" onClick={() => console.log('확인')}>
          확인
        </Button>
      </ButtonWrapper>
    </>
  );
};

const ImageAndEmail = styled.div`
  display: flex;

  img {
    width: 80px;
    height: 80px;
    border-radius: 24px;
    background-color: ${({ theme: { colors } }) => colors.Gray300};
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    margin-left: 34px;
    p {
      color: ${({ theme: { colors } }) => colors.Gray900};
      ${({ theme: { fonts } }) => fonts.Body1}
    }

    button {
      color: ${({ theme: { colors } }) => colors.WeekandBlue};
      ${({ theme: { fonts } }) => fonts.SubHead2}
    }
  }
`;

const SelectInterests = styled.div`
  display: flex;
  margin: 8px 0px;

  p {
    width: 83px;
    text-align: end;
    margin-top: 4px;
    margin-right: 32px;
    color: ${({ theme: { colors } }) => colors.WeekandBlue};
    ${({ theme: { fonts } }) => fonts.Body3}
  }

  div {
    width: 580px;
  }
`;

const ButtonWrapper = styled.div`
  margin-left: 112px;
  margin-top: 28px;
`;
