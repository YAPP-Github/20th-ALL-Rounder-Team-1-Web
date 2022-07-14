import styled from 'styled-components';

import { Button } from '@/common';

export const Job = () => {
  return (
    <>
      <Title>직업</Title>
      <AddJobButton
        onClick={() => {
          console.log(1);
        }}
      >
        추가하러 가기
      </AddJobButton>
    </>
  );
};

const Title = styled.div`
  ${({ theme: { fonts } }) => fonts.Head2('Gray700')}
  margin-bottom: 8px;
`;

const AddJobButton = styled(Button)`
  width: 140px;
  padding: 9px 21px 9px 14px;
  ${({ theme: { fonts } }) => fonts.Body2('Gray400')}
  background-color: #fff;
  border-radius: 136px;

  &::before {
    content: '';
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 24, 24)}
    margin: -2px 4px 0 0;
    background-size: 455px 385px;
    background-position: -373px -202px;
  }
`;
