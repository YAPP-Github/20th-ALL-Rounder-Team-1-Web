import React from 'react';

import { usePopUpState } from '../../contexts';

export const GhostPopUp = () => {
  const { isGhostOpen } = usePopUpState();

  return <div>{isGhostOpen && <h1>👻 Ghost PopUp 👻</h1>}</div>;
};
