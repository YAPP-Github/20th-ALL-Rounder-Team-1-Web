import React from 'react';
import { usePopUpState } from '../../store';

export const PopUp = () => {
  const state = usePopUpState();

  return <div>{state.isOpen && <h1>👻 PopUp 👻</h1>}</div>;
};
