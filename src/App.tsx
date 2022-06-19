import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { PopUpPortal } from './PopUpPortal';

import { DimmedLayer, PopUp } from '@/components';
import { FindPassword, Home, Login, Register, Setting } from '@/pages';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* TODO: 추후에 토큰 유무 확인을 통해 다른 라우팅 처리 필요 */}
        <Route
          path="/"
          element={
            <Suspense fallback={<>Loading...</>}>
              <Login />
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
        <Route
          path="/setting"
          element={
            <Suspense fallback={<>Loading...</>}>
              <Setting />
            </Suspense>
          }
        />
        <Route
          path="/Register"
          element={
            <Suspense fallback={<>Loading...</>}>
              <Register />
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
