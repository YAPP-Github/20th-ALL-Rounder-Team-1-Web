import { useContext } from 'react';

import { PopUpContext } from '@/contexts';

export const FindPasswordPopUp = () => {
  const { isFindPasswordOpen, setIsFindPasswordOpen } = useContext(PopUpContext);

  return (
    <>
      <button onClick={() => setIsFindPasswordOpen(!isFindPasswordOpen)}>Close PopUp</button>
      <h1>Find Password</h1>
      <p>임시 비밀번호 발급...</p>
    </>
  );
};
