import { useState } from 'react';
import { Input } from '@/components';

const App = () => {
  const [currentPassword, setCurrentPassword] = useState('');

  return (
    <div>
      <h1>Initial Setting</h1>
      <Input type="authNumber" inputMaxLength={6} inputType="text" authInput={123456} />
      <Input type="categoryTitle" inputMaxLength={15} inputType="text" />
      <Input type="date" inputType="date" />
      <Input type="email" inputMaxLength={320} inputType="email" />
      <Input type="nickName" inputMaxLength={12} inputType="text" isValidNickName={undefined} />
      <Input
        type="password"
        inputMaxLength={50}
        inputType="password"
        setCurrentPassword={setCurrentPassword}
      />
      <Input type="planTitle" inputMaxLength={10} inputType="text" />
      <Input
        type="retypedPassword"
        inputMaxLength={50}
        inputType="password"
        typedPassword={currentPassword}
      />
      <Input type="time" inputType="time" />
    </div>
  );
};

export default App;
