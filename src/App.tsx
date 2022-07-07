import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { PopUpPortal, ToastPortal } from './portals';

import { DimmedLayer, FloatingButton, PopUp, Toast } from '@/common';
import { useDocumentTitle } from '@/hooks';
import {
  Agreement,
  FindPassword,
  Home,
  Login,
  ManageCategory,
  Register,
  Search,
  SelectInterest,
  Setting,
} from '@/pages';

const App = () => {
  useDocumentTitle('Weekand');

  return (
    <Router>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agreement" element={<Agreement />} />
          <Route path="/login" element={<Login />} />
          <Route path="/find-password" element={<FindPassword />} />
          <Route path="/select-interest" element={<SelectInterest />} />
          <Route path="/manage-category" element={<ManageCategory />} />
          <Route path="/search" element={<Search />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<div>아직 없는 페이지입니다.</div>} />
        </Routes>
        <DimmedLayer />
        <PopUpPortal>
          <PopUp />
        </PopUpPortal>
        <ToastPortal>
          <Toast />
        </ToastPortal>
      </Suspense>
      <FloatingButton />
    </Router>
  );
};

export default App;
