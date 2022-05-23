import { ModalPortal } from './ModalPortal';
import { Modal } from '@/components';
import { TestPage } from '@/pages';

const App = () => {
  return (
    <>
      <TestPage />
      <ModalPortal>
        <Modal />
      </ModalPortal>
    </>
  );
};

export default App;
