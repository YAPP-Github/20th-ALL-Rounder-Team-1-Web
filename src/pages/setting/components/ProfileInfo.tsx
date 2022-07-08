import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';

interface ProfileInfoProps {
  title: string;
  content: string;
  changeContent?: Dispatch<SetStateAction<string>>;
  isInput?: boolean;
}

export const ProfileInfo = ({
  title,
  content,
  changeContent,
  isInput = false,
}: ProfileInfoProps) => {
  const [value, setValue] = useState(content);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(value);
    if (changeContent) {
      changeContent(value);
    }
  };

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>
        {isInput ? (
          <input className="input" type="text" value={value} onChange={onChange} />
        ) : (
          <p className="text">{content}</p>
        )}
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.p`
  width: 83px;
  text-align: end;
  margin-right: 32px;
  color: ${({ theme: { colors } }) => colors.Gray500};
  ${({ theme: { fonts } }) => fonts.SubHead1}
`;

const Content = styled.div`
  width: 540px;
  height: 28px;
  background-color: ${({ theme: { colors } }) => colors.Gray200};
  border-radius: 10px;
  padding: 12px 18px;
  margin: 18px 0px;

  .input {
    width: 540px;
    border: none;
    background-color: transparent;
    color: ${({ theme: { colors } }) => colors.Gray900};
    ${({ theme: { fonts } }) => fonts.SubHead1}
  }

  .input:focus {
    outline: none;
  }

  .text {
    color: ${({ theme: { colors } }) => colors.Gray900};
    ${({ theme: { fonts } }) => fonts.SubHead1}
  }
`;
