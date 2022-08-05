import styled from 'styled-components';

import { Button } from '@/common';

interface InterestProps {
  interests: string[];
}

export const Interests = ({ interests }: InterestProps) => {
  return (
    <>
      <Title>관심사</Title>
      {interests.length > 0 ? (
        <InterestWrapper>
          {interests.map((interest, index) => (
            <p key={index}>{interest}</p>
          ))}
        </InterestWrapper>
      ) : (
        <AddInterestButton
          onClick={() => {
            console.log(1);
          }}
        >
          추가하러 가기
        </AddInterestButton>
      )}
    </>
  );
};

const Title = styled.div`
  ${({ theme: { fonts } }) => fonts.Head2('Gray700')}
  margin: 20px 0 8px 0;
`;

const AddInterestButton = styled(Button)`
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

const InterestWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  p {
    width: 61px;
    height: 22px;
    padding: 8px 14px;
    ${({ theme: { fonts } }) => fonts.Subhead3}
    color: ${({ theme: { colors } }) => colors.WeekandBlue};
    background-color: ${({ theme: { colors } }) => colors.WeekandBlueSub};
    border-radius: 108px;
    text-align: center;
    line-height: 22.4px;
  }
`;
