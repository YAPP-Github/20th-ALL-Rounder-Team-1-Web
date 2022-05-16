import styled from 'styled-components';

import { usePopUpDispatch } from '@/contexts';

export const FindPasswordPopUp = () => {
  const dispatch = usePopUpDispatch();

  const setIsCalendarOpen = () => dispatch({ type: 'TOGGLE_FIND_PASSWORD_POP_UP' });

  return (
    <Wrapper>
      <button onClick={setIsCalendarOpen}>Close PopUp</button>
      <h1>Email</h1>
      <input type="email" />
      <button>임시 비밀번호 발급</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  border: 1px solid black;
  width: 1000px;
  height: 600px;
  top: 100px;
  left: 200px;
`;
