import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

export const ToastPortal = ({ children }: PropsWithChildren<unknown>) => {
  const toastElement = document.getElementById('toast');

  if (!toastElement) {
    throw new Error('Failed to find the toast element');
  }

  return createPortal(children, toastElement);
};
