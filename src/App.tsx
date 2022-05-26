import { ModalPortal } from './ModalPortal';
import { Modal } from '@/components';
import { JobSelection } from './components/common/JobSelection';
import { useState } from 'react';

const App = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <h1>Initial Setting</h1>
      <JobSelection name={'IT엔지니어'} isClicked={isClicked} setIsClicked={setIsClicked} />
      <ModalPortal>
        <Modal />
      </ModalPortal>
    </>
  );
};

export default App;
