import { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';

export const Accessibility = () => {
  const [selected, setSelected] = useState('5초');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    console.log(value);
    setSelected(value);
  };

  console.log(selected);

  return (
    <Wrapper>
      <Title>
        <h1>토스트가 등장하는 시간을</h1>
        <h1>설정할 수 있어요</h1>
      </Title>
      <Input>
        <input
          type="radio"
          value="3초"
          id="3 seconds"
          checked={selected === '3초'}
          onChange={handleChange}
        />
        <p>3초</p>
      </Input>
      <Input>
        <input
          type="radio"
          value="5초"
          id="5 seconds"
          checked={selected === '5초'}
          onChange={handleChange}
        />
        <p>5초</p>
      </Input>
      <Input>
        <input
          type="radio"
          value="10초"
          id="10 seconds"
          checked={selected === '10초'}
          onChange={handleChange}
        />
        <p>10초</p>
      </Input>
      <Input>
        <input
          type="radio"
          value="30초"
          id="30 seconds"
          checked={selected === '30초'}
          onChange={handleChange}
        />
        <p>30초</p>
      </Input>
      <Input>
        <input
          type="radio"
          value="60초"
          id="60 seconds"
          checked={selected === '60초'}
          onChange={handleChange}
        />
        <p>60초</p>
      </Input>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 739px;
  height: 758px;
  padding: 60px 40px;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid black;
`;

const Title = styled.div`
  width: 240px;
  height: 72px;
  text-align: start;
  margin-bottom: 24px;

  h1 {
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
  }
`;

const Input = styled.div`
  text-align: start;
  display: flex;
  align-items: center;
  padding: 13px 0px;
  gap: 10px;

  input[type='radio'] {
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid ${({ theme: { colors } }) => colors.Gray300};
    border-radius: 100%;
    cursor: pointer;
  }

  input[type='radio']:checked {
    width: 20px;
    height: 20px;
    border: 2px solid ${({ theme: { colors } }) => colors.WeekandBlue};
    padding: 3px;
    background-color: ${({ theme: { colors } }) => colors.WeekandBlue};
    background-clip: content-box;
  }

  p {
    ${({ theme: { fonts } }) => fonts.SubHead2}
  }
`;
