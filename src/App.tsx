import { PopUpPortal } from './PopUpPortal';
import { DimmedLayer, PageLayout, PopUp } from '@/components';
import SelectInterest from './pages/SelectInterest';

const App = () => {
  return (
    <PageLayout title="홈 페이지">
      <SelectInterest />
      <DimmedLayer />
      <PopUpPortal>
        <PopUp />
      </PopUpPortal>
    </PageLayout>
  );
};

export default App;
