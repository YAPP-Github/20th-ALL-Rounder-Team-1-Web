import { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { PopUpPortal } from './PopUpPortal';

import { DimmedLayer, PopUp } from '@/common';
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
  return (
    <Router>
      <Suspense fallback={<p> Loading...</p>}>
        <Routes>
          {/* TODO: 추후에 토큰 유무 확인을 통해 다른 라우팅 처리 필요 */}
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
      </Suspense>
    </Router>
  );
};

export default App;
