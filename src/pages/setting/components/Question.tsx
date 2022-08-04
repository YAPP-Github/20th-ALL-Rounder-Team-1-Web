import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

import { useSendInquiry } from '@/api/setting';
import { Button } from '@/common';

export const Question = () => {
  const [contents, setContents] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { send_inquiry } = useSendInquiry();

  const onChangeContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setContents(value);
  };

  const updatePassword = async () => {
    const {
      data: { updatePassword },
    } = await send_inquiry({
      variables: {
        contents,
      },
    });

    return updatePassword;
  };

  const onClickSubmit = () => {
    if (contents.length > 0) {
      updatePassword();
      setIsSubmitted(true);
    }
  };

  return (
    <Wrapper>
      {isSubmitted ? (
        <h1>제출완료</h1>
      ) : (
        <>
          <Title>문의하실 내용을 작성해주세요 :)</Title>
          <Description>문의에 대한 답변은 로그인된 이메일로 전송됩니다.</Description>
          <TextArea
            placeholder="내용을 입력해주세요."
            value={contents}
            onChange={(event) => onChangeContent(event)}
          ></TextArea>
          <Button className="question_button" onClick={onClickSubmit}>
            문의하기
          </Button>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 739px;
  height: 758px;
  padding: 60px 40px;
`;

const Title = styled.h1`
  width: 157px;
  height: 72px;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  color: ${({ theme: { colors } }) => colors.Gray900};
`;

const Description = styled.p`
  ${({ theme: { fonts } }) => fonts.Body1};
  color: ${({ theme: { colors } }) => colors.Gray500};
  margin-top: 20px;
  margin-bottom: 32px;
`;

const TextArea = styled.textarea`
  display: block;
  resize: none;
  width: 699px;
  height: 320px;
  padding: 20px;
  border: none;
  border-radius: 10px;
  ${({ theme: { fonts } }) => fonts.Body1}
  background-color: ${({ theme: { colors } }) => colors.Gray100};
  margin-bottom: 36px;

  ::placeholder {
    color: ${({ theme: { colors } }) => colors.Gray400};
  }
`;
