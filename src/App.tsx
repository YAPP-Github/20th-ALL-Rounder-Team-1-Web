import { useState } from 'react';

import { ModalPortal } from './ModalPortal';
import { DimmedLayer, PageLayout, PopUp } from '@/components';

const App = () => {
  const [dimmedVisible, setDimmedVisible] = useState(false);
  const [popUpVisible, setPopUpVisible] = useState(false);

  return (
    <PageLayout title="홈 페이지">
      <h1>Initial Setting</h1>
      <DimmedLayer visible={dimmedVisible} />
      <ModalPortal>
        <PopUp visible={popUpVisible} />
      </ModalPortal>
    </PageLayout>
  );
};

export default App;
