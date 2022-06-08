import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { PopUpPortal } from './PopUpPortal';
import { DimmedLayer, PopUp } from '@/components';
import { Home, Login } from '@/pages';

const App = () => {
  return (
    <Router>
      <Routes>
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
      </Routes>
      <DimmedLayer />
      <PopUpPortal>
        <PopUp />
      </PopUpPortal>
    </Router>
  );
};

export default App;
