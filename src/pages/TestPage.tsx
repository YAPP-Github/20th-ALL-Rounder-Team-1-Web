import React from 'react';

import { CatPopUp, GhostPopUp } from '../components';
import { usePopUpDispatch } from '../contexts';

const TestPage = () => {
  const dispatch = usePopUpDispatch();

  const setIsCatOpen = () => dispatch({ type: 'TOGGLE_CAT_POP_UP' });
  const setIsGhostOpen = () => dispatch({ type: 'TOGGLE_GHOST_POP_UP' });

  return (
    <div>
      <button onClick={setIsCatOpen}>Cat PopUp</button>
      <button onClick={setIsGhostOpen}>Ghost PopUp</button>
      <CatPopUp />
      <GhostPopUp />
    </div>
  );
};

export default TestPage;
