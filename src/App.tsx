import { Input } from './components';

const App = () => {
  return (
    <div>
      <h1>Initial Setting</h1>
      <Input type="email" />
      <Input type="authNumber" authInput={123456} />
      <Input type="nickName" isValidNickName={undefined} />
    </div>
  );
};

export default App;
