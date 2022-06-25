import { EditProfile, Question } from '@/pages/setting/components';

export const getCurrentSetting = (name: string) => {
  if (name === '프로필 편집') {
    return <EditProfile />;
  }
  if (name === '비밀번호 변경') {
    return (
      <div>
        <h1>비밀번호 변경</h1>
      </div>
    );
  }
  if (name === '접근성 설정') {
    return (
      <div>
        <h1>접근성 설정</h1>
      </div>
    );
  }
  if (name === '문의하기') {
    return <Question />;
  }
};
