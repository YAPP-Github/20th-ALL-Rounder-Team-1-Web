import { PopUpPortal } from './PopUpPortal';
import { DimmedLayer, PageLayout, PopUp } from '@/components';

const App = () => {
  return (
    <PageLayout title="홈 페이지">
      <h1>Initial Setting</h1>
      <DimmedLayer />
      <PopUpPortal>
        <PopUp />
      </PopUpPortal>
    </PageLayout>
  );
};

export default App;
