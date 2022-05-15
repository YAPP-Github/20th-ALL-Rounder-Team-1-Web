import React from 'react';

import { usePopUpState } from '../../contexts';

export const CatPopUp = () => {
  const { isCatOpen } = usePopUpState();

  return <div>{isCatOpen && <h1>🙀 Cat PopUp 🙀</h1>}</div>;
};
