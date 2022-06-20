import styled from 'styled-components';

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
        <p>초기화</p>
      </div>
    </>
  );
};
