import { useContext } from 'react';

import { DimmedLayerContext, PopUpContext } from '@/contexts';

export const CalendarPopUp = () => {
  const { setIsVisible: setPopUpVisible } = useContext(PopUpContext);
  const { setIsVisible: setDimmedVisible } = useContext(DimmedLayerContext);

  const onClick = () => {
    setPopUpVisible(false);
    setDimmedVisible(false);
  };

  return (
    <>
      <button onClick={onClick}>Close PopUp</button>
      <h1>Calendar</h1>
      <p>화려한 달력이 있을 예정....</p>
    </>
  );
};
