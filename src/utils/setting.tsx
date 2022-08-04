import { Accessibility, ChangePassword, EditProfile, Question } from '@/pages/setting/components';

export const getCurrentSetting = (name: string) => {
  switch (name) {
    case '프로필 편집':
      return <EditProfile />;
    case '비밀번호 변경':
      return <ChangePassword />;
    case '접근성 설정':
      return <Accessibility />;
    default:
      return <Question />;
  }
};
