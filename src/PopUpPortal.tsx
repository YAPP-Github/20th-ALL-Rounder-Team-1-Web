import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

export const PopUpPortal = ({ children }: PropsWithChildren<unknown>) => {
  const popUpElement = document.getElementById('popup');

  if (!popUpElement) {
    throw new Error('Failed to find the popup element');
  }

  return createPortal(children, popUpElement);
};
