import { useContext } from 'react';

import { DimmedLayerContext, PopUpContext } from '@/contexts';

export const FindPasswordPopUp = () => {
  const { setIsVisible: setPopUpVisible } = useContext(PopUpContext);
  const { setIsVisible: setDimmedVisible } = useContext(DimmedLayerContext);

  const onClick = () => {
    setPopUpVisible(false);
    setDimmedVisible(false);
  };

  return (
    <>
      <button onClick={onClick}>Close PopUp</button>
      <h1>Find Password</h1>
      <p>임시 비밀번호 발급...</p>
    </>
  );
};
