import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

export const PopupPortal = ({ children }: PropsWithChildren<unknown>) => {
  const popupElement = document.getElementById('popup');

  if (!popupElement) {
    throw new Error('Failed to find the popup element');
  }

  return createPortal(children, popupElement);
};
