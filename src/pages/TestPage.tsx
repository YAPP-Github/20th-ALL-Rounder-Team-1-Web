import React from 'react';
import { usePopUpDispatch } from '../store';
import { PopUp } from '../components';

const TestPage = () => {
  const dispatch = usePopUpDispatch();

  const setIsOpen = () => dispatch({ type: 'TOGGLE_POP_UP' });

  return (
    <div>
      <button onClick={setIsOpen}>PopUp</button>
      <PopUp />
    </div>
  );
};

export default TestPage;
