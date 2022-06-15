import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { PopUpPortal } from './PopUpPortal';
import { DimmedLayer, PopUp } from '@/components';
import { Home, Login, FindPassword } from '@/pages';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* TODO: 추후에 토큰 유무 확인을 통해 다른 라우팅 처리 필요 */}
        <Route
          path="/"
          element={
            <Suspense fallback={<>Loading...</>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<>Loading...</>}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/find-password"
          element={
            <Suspense fallback={<>Loading...</>}>
              <FindPassword />
            </Suspense>
          }
        />
      </Routes>
      <DimmedLayer />
      <PopUpPortal>
        <PopUp />
      </PopUpPortal>
    </Router>
  );
};

export default App;
