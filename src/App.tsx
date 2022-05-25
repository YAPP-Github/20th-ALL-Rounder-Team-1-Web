import { ModalPortal } from './ModalPortal';
import { Modal, SearchFilter } from '@/components';

const App = () => {
  return (
    <>
      <h1>Initial Setting</h1>

      <SearchFilter jobs={['IT엔지니어', '마케팅', '영업']} />

      <ModalPortal>
        <Modal />
      </ModalPortal>
    </>
  );
};

export default App;
