import styled from 'styled-components';

interface PurposeProps {
  goal: string;
}

export const Purpose = ({ goal }: PurposeProps) => {
  return (
    <>
      <Title>한줄목표</Title>
      <Description>{goal.length ? goal : 'We can do, Weekand!'}</Description>
    </>
  );
};

const Title = styled.div`
  margin: 42px 0 6px 0;
  ${({ theme: { fonts } }) => fonts.Body1('Gray500')}
`;

const Description = styled.span`
  ${({ theme: { fonts } }) => fonts.Body1}
`;
