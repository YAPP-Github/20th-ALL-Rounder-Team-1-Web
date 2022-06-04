import { useState } from 'react';

import { PopUpPortal } from './PopUpPortal';
import { DimmedLayer, PageLayout, PopUp } from '@/components';

const App = () => {
  const [dimmedVisible, setDimmedVisible] = useState(false);
  const [popUpVisible, setPopUpVisible] = useState(false);

  return (
    <PageLayout title="홈 페이지">
      <h1>Initial Setting</h1>
      <DimmedLayer visible={dimmedVisible} />
      <PopUpPortal>
        <PopUp visible={popUpVisible} />
      </PopUpPortal>
    </PageLayout>
  );
};

export default App;
