import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';

interface SearchBarProps {
  setIsInputFocused?: Dispatch<SetStateAction<boolean>>;
}

export const SearchBar = ({ setIsInputFocused }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState('');

  const onClickInput = () => {
    if (setIsInputFocused && inputValue.length === 0) {
      setIsInputFocused(true);
    }
  };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
    if (setIsInputFocused) {
      setIsInputFocused(false);
    }
  };

  return (
    <Wrapper>
      <i className="search_icon" />
      <input
        value={inputValue}
        onChange={onChangeInput}
        type="text"
        placeholder="일정을 검색해보세요"
        onClick={onClickInput}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 542px;
  height: 28px;
  border-radius: 13.21px;
  padding: 15px 20px;
  background-color: ${({ theme: { colors } }) => colors.Gray200};

  input {
    width: 500px;
    border: none;
    background-color: transparent;
    font-size: 18px;
    font-weight: 500;
    line-height: 28.8px;

    &:focus {
      box-shadow: none;
    }

    &::placeholder {
      color: ${({ theme: { colors } }) => colors.Gray400};
    }
  }

  i.search_icon {
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 28, 28)}
    background-position: -250px -303px;
  }
`;
