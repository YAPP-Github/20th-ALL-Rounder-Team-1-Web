import styled from 'styled-components';

export const AlarmList = () => {
  return (
    <Wrapper>
      <h1>알람 리스트</h1>
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  width: 420px;
  height: 500px;
  position: absolute;
  top: 76px;
  left: 832px;
  background-color: #fff;
  z-index: 2;
  box-shadow: 5.320000171661377px 7.980000019073486px 26.600000381469727px 0px #0000000f;
`;
