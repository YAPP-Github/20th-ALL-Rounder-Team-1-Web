import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

import { DebounceInput } from '@/common';

interface SearchBarProps {
  setIsInputFocused?: Dispatch<SetStateAction<boolean>>;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  isSearchUser?: boolean;
}

export const SearchBar = ({
  setIsInputFocused,
  inputValue,
  setInputValue,
  isSearchUser = false,
}: SearchBarProps) => {
  return (
    <Wrapper>
      <i className="search_icon" />
      <DebounceInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        setIsInputFocused={setIsInputFocused}
        isSearchUser={isSearchUser}
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
