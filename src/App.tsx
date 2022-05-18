import { useState } from 'react';

import { Input } from './components';

const App = () => {
  const [currentPassword, setCurrentPassword] = useState('');

  return (
    <div>
      <h1>Initial Setting</h1>
      <Input type="authNumber" authInput={123456} />
      <Input type="categoryTitle" />
      <Input type="date" />
      <Input type="email" />
      <Input type="nickName" isValidNickName={undefined} />
      <Input type="password" setCurrentPassword={setCurrentPassword} />
      <Input type="planTitle" />
      <Input type="retypedPassword" typedPassword={currentPassword} />
      <Input type="time" />
    </div>
  );
};

export default App;
