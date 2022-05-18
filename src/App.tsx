import { useState } from 'react';
import { Input } from './components';

const App = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  return (
    <div>
      <h1>Initial Setting</h1>
      <Input type="email" />
      <Input type="authNumber" authInput={123456} />
      <Input type="nickName" isValidNickName={undefined} />
      <Input type="password" setCurrentPassword={setCurrentPassword} />
      <Input type="retypedPassword" typedPassword={currentPassword} />
      <Input type="planTitle" />
      <Input type="time" />
      <Input type="date" />
      <Input type="categoryTitle" />
    </div>
  );
};

export default App;
