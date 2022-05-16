import { createPortal } from 'react-dom';

interface IProps {
  children: React.ReactNode;
}

export const ModalPortal = ({ children }: IProps) => {
  const modalElement = document.getElementById('modal');

  if (!modalElement) {
    throw new Error('Failed to find the modal element');
  }

  return createPortal(children, modalElement);
};
