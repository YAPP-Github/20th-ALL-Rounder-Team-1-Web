import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { PopUpPortal, ToastPortal } from './portals';

import { DimmedLayer, FloatingButton, Popup, ProtectRoute, Toast } from '@/common';
import { useDocumentTitle } from '@/hooks';
import {
  Agreement,
  CertainCategory,
  GetTempPassword,
  Home,
  Login,
  ManageCategory,
  Register,
  Search,
  SearchUser,
  SelectInterest,
  Setting,
} from '@/pages';

const App = () => {
  useDocumentTitle('Weekand');

  return (
    <Router>
      <Suspense fallback={<></>}>
        <ProtectRoute>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agreement" element={<Agreement />} />
            <Route path="/login" element={<Login />} />
            <Route path="/get-temp-password" element={<GetTempPassword />} />
            <Route
              path="/select-interest"
              element={
                <Suspense fallback={<></>}>
                  <SelectInterest />
                </Suspense>
              }
            />
            <Route path="/manage-category" element={<ManageCategory />} />
            <Route path="/search" element={<Search />} />
            <Route path="/search/:id" element={<SearchUser />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/register" element={<Register />} />
            <Route path="/manage-category/:id" element={<CertainCategory />} />
            <Route path="*" element={<div>아직 없는 페이지입니다.</div>} />
          </Routes>
        </ProtectRoute>
      </Suspense>
      <DimmedLayer />
      <PopUpPortal>
        <Popup />
      </PopUpPortal>
      <ToastPortal>
        <Toast />
      </ToastPortal>
      <FloatingButton />
    </Router>
  );
};

export default App;
