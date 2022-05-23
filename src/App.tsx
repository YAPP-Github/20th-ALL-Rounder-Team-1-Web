import { useState } from 'react';

import { Input } from '@/components';

const App = () => {
  const [currentPassword, setCurrentPassword] = useState('');

  return (
    <div>
      <h1>Initial Setting</h1>
      <Input role="authNumber" maxLength={6} type="text" authInput={123456} />
      <Input role="categoryTitle" maxLength={15} type="text" />
      <Input role="date" type="date" />
      <Input role="email" maxLength={320} type="email" />
      <Input role="nickName" maxLength={12} type="text" isValidNickName={undefined} />
      <Input
        role="password"
        maxLength={50}
        type="password"
        setCurrentPassword={setCurrentPassword}
      />
      <Input role="planTitle" maxLength={10} type="text" />
      <Input
        role="retypedPassword"
        maxLength={50}
        type="password"
        typedPassword={currentPassword}
      />
      <Input role="time" type="time" />
    </div>
  );
};

export default App;
