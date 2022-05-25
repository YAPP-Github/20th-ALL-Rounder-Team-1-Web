import { ModalPortal } from './ModalPortal';
import { Modal } from '@/components';

const App = () => {
  return (
    <>
      <h1>Initial Setting</h1>
      <ModalPortal>
        <Modal />
      </ModalPortal>
    </>
  );
};

export default App;
