import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

export const ModalPortal = ({ children }: PropsWithChildren<unknown>) => {
  const modalElement = document.getElementById('modal');

  if (!modalElement) {
    throw new Error('Failed to find the modal element');
  }

  return createPortal(children, modalElement);
};
