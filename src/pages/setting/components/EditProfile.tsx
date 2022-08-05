import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { ProfileInfo } from '.';

import { useCheckDuplicateNickname, useUpdateUserProfile, useUserInfo } from '@/api/setting';
import { Button, Interest } from '@/common';
import { ToastContext } from '@/contexts';
import { checkNicknameValidation, checkPurpose, INTERESTS, JOBS } from '@/utils';

interface IUserInfo {
  id: string;
  email: string;
  nickname: string;
  profileImageUrl: string;
  goal: string;
  jobs: string[];
  interests: string[];
}

export const EditProfile = () => {
  const [userInfo, setUserInfo] = useState<IUserInfo>();
  const [currentProfileImageUrl, setCurrentProfileImageUrl] = useState('');
  const [currentNickname, setCurrentNickname] = useState('');
  const [currentPurpose, setCurrentPurpose] = useState('');
  const [totalJobs, setTotalJobs] = useState<string[] | undefined>([]);
  const [totalInterests, setTotalInterests] = useState<string[] | undefined>([]);
  const { user_info } = useUserInfo();

  const showUser = async () => {
    const {
      data: { user },
    } = await user_info({});
    const { nickname, profileImageUrl, goal, jobs, interests } = user;
    setUserInfo(user);
    setCurrentProfileImageUrl(profileImageUrl);
    setCurrentNickname(nickname);
    setCurrentPurpose(goal);
    setTotalJobs(jobs);
    setTotalInterests(interests);
  };

  useEffect(() => {
    showUser();
  }, []);

  const { setToast } = useContext(ToastContext);
  const { check_duplicate_nickname } = useCheckDuplicateNickname();
  const { update_user_profile } = useUpdateUserProfile();

  const isSelectedInterest = (name: string, totalSelected: string[]) => {
    return totalSelected?.includes(name);
  };

  const isDuplicateNickName = async (nickname: string) => {
    const {
      data: { checkDuplicateNickname },
    } = await check_duplicate_nickname({
      variables: {
        nickname,
      },
    });

    return checkDuplicateNickname;
  };

  const isValid = async () => {
    const nickNameResult = await isDuplicateNickName(currentNickname!);
    const { type: nickNameType, message: nickNameMessage } =
      checkNicknameValidation(nickNameResult);
    if (nickNameType === 'error') {
      setToast('error', nickNameMessage);
      return false;
    }

    const { type: purposeType, message: purposeMessage } = checkPurpose(currentPurpose!);
    if (purposeType === 'error') {
      setToast('error', purposeMessage);
      return false;
    }

    return true;
  };

  const updateUserProfile = async () => {
    const {
      data: { checkDuplicateNickname },
    } = await update_user_profile({
      variables: {
        input: {
          profileImageFilename: currentProfileImageUrl,
          nickname: currentNickname,
          goal: currentPurpose,
          jobs: totalJobs,
          interests: totalInterests,
        },
      },
    });

    return checkDuplicateNickname;
  };

  const onClickSubmit = async () => {
    if (await isValid()) {
      console.log(
        currentProfileImageUrl,
        currentNickname,
        currentPurpose,
        totalJobs,
        totalInterests
      );

      await updateUserProfile();
      setToast('success', '프로필 정보가 저장되었습니다.');
      return;
    }
    return;
  };

  const onClickReset = (type: string) => {
    if (type === 'JOBS') {
      return setTotalJobs([]);
    }
    if (type === 'INTERESTS') {
      return setTotalInterests([]);
    }
    return;
  };

  return (
    <Wrapper>
      {userInfo && (
        <>
          <ImageAndEmail>
            <img src={currentProfileImageUrl} alt="User Image" width={80} height={80} />
            <div>
              <p className="email">{userInfo.email}</p>
              <button className="edit_profile_img" onClick={() => console.log('이미지 변경')}>
                프로필 사진 바꾸기
              </button>
            </div>
          </ImageAndEmail>
          <ProfileInfo
            title="닉네임"
            content={currentNickname!}
            changeContent={setCurrentNickname}
            isInput={true}
          />
          <ProfileInfo
            title="한줄목표"
            content={currentPurpose!}
            changeContent={setCurrentPurpose}
            isInput={true}
          />
          <ProfileInfo title="직업" content={totalJobs?.join(', ')} />
          <SelectInterests>
            <button className="reset" onClick={() => onClickReset('JOBS')}>
              초기화
            </button>
            <div className="interest_list">
              {JOBS.map((job, index) => (
                <Interest
                  key={index}
                  className="setting_interest"
                  interestType="job"
                  name={job}
                  totalChoices={totalJobs!}
                  setTotalChoices={setTotalJobs}
                  isChosen={isSelectedInterest(job, totalJobs!)}
                />
              ))}
            </div>
          </SelectInterests>
          <ProfileInfo title="관심사" content={totalInterests?.join(', ')} />
          <SelectInterests>
            <button className="reset" onClick={() => onClickReset('INTERESTS')}>
              초기화
            </button>
            <div className="interest_list">
              {INTERESTS.map((interest, index) => (
                <Interest
                  key={index}
                  className="setting_interest"
                  interestType="interest"
                  name={interest}
                  totalChoices={totalInterests!}
                  setTotalChoices={setTotalInterests}
                  isChosen={isSelectedInterest(interest, totalInterests!)}
                />
              ))}
            </div>
          </SelectInterests>
          <ButtonWrapper>
            <Button className="question_button" onClick={onClickSubmit}>
              확인
            </Button>
          </ButtonWrapper>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 689px;
  height: 832px;
  padding: 42px 64px;
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
  margin: 7px 0px;

  .reset {
    width: 90px;
    text-align: end;
    margin-top: 8px;
    margin-right: 26px;
    color: ${({ theme: { colors } }) => colors.WeekandBlue};
    ${({ theme: { fonts } }) => fonts.Body3}
  }

  .interest_list {
    width: 620px;
  }
`;

const ButtonWrapper = styled.div`
  margin-left: 112px;
  margin-top: 31px;
`;
