import { useState } from 'react';
import styled from 'styled-components';

import { ProfileInfo } from '.';

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

  const [currentNickname, setCurrentNickname] = useState(nickName);
  const [currentPurpose, setCurrentPurpose] = useState(purpose);
  const [totalJobs, setTotalJobs] = useState<string[]>([...jobs]);
  const [totalInterests, setTotalInterests] = useState<string[]>([...interests]);

  const onClickReset = (type: string) => {
    if (type === 'JOBS') {
      return setTotalJobs([]);
    }
    if (type === 'INTERESTS') {
      return setTotalInterests([]);
    }

    return;
  };

  const isSelectedInterest = (name: string, totalSelected: string[]) => {
    return totalSelected.includes(name);
  };

  return (
    <Wrapper>
      <ImageAndEmail>
        <img src={imageUrl} alt="User Image" width={80} height={80} />
        <div>
          <p className="email">{email}</p>
          <button className="edit_profile_img" onClick={() => console.log('프로필 편집 팝업')}>
            프로필 사진 바꾸기
          </button>
        </div>
      </ImageAndEmail>
      <ProfileInfo
        title="닉네임"
        content={currentNickname}
        changeContent={setCurrentNickname}
        isInput={true}
      />
      <ProfileInfo
        title="한줄목표"
        content={currentPurpose}
        changeContent={setCurrentPurpose}
        isInput={true}
      />
      <ProfileInfo title="직업" content={totalJobs.join(', ')} />
      <SelectInterests>
        <button className="reset" onClick={() => onClickReset('JOBS')}>
          초기화
        </button>
        <div className="interest_list">
          {JOBS.map((job, index) => (
            <Interest
              key={index}
              className="setting_interest"
              name={job}
              totalChoices={totalJobs}
              setTotalChoices={setTotalJobs}
              isChosen={isSelectedInterest(job, totalJobs)}
            />
          ))}
        </div>
      </SelectInterests>
      <ProfileInfo title="관심사" content={totalInterests.join(', ')} />
      <SelectInterests>
        <button className="reset" onClick={() => onClickReset('INTERESTS')}>
          초기화
        </button>
        <div className="interest_list">
          {INTERESTS.map((interest, index) => (
            <Interest
              key={index}
              className="setting_interest"
              name={interest}
              totalChoices={totalInterests}
              setTotalChoices={setTotalInterests}
              isChosen={isSelectedInterest(interest, totalInterests)}
            />
          ))}
        </div>
      </SelectInterests>
      <ButtonWrapper>
        <Button className="question_button" onClick={() => console.log('확인')}>
          확인
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0px 20px;
`;

const ImageAndEmail = styled.div`
  display: flex;

  img {
    border-radius: 24px;
    background-color: ${({ theme: { colors } }) => colors.Gray300};
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    margin-left: 34px;

    .email {
      color: ${({ theme: { colors } }) => colors.Gray900};
      ${({ theme: { fonts } }) => fonts.Body1}
    }

    .edit_profile_img {
      color: ${({ theme: { colors } }) => colors.WeekandBlue};
      ${({ theme: { fonts } }) => fonts.SubHead2}
    }
  }
`;

const SelectInterests = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 8px 0px;

  .reset {
    width: 83px;
    text-align: end;
    margin-top: 8px;
    margin-right: 32px;
    color: ${({ theme: { colors } }) => colors.WeekandBlue};
    ${({ theme: { fonts } }) => fonts.Body3}
  }

  .interest_list {
    width: 580px;
  }
`;

const ButtonWrapper = styled.div`
  margin-left: 112px;
  margin-top: 28px;
`;
