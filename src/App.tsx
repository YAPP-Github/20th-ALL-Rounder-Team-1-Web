import { ModalPortal } from './ModalPortal';
import { Modal, PageLayout } from '@/components';

const App = () => {
  return (
    <PageLayout title="홈 페이지">
      <h1>Initial Setting</h1>
      <ModalPortal>
        <Modal />
      </ModalPortal>
    </PageLayout>
  );
};

export default App;
