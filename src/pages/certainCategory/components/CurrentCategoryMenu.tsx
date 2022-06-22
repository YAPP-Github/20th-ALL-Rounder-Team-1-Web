import styled from 'styled-components';

interface CurrentCategoryMenuProps {
  name: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
}

export const CurrentCategoryMenu = ({
  name,
  startDate,
  startTime,
  endDate,
  endTime,
}: CurrentCategoryMenuProps) => {
  return (
    <Wrapper>
      <Title>
        <div />
        <h2>{name}</h2>
      </Title>
      <Time>
        <img src="../../assets/start_time_icon.png" alt="" />
        <p>{startDate}</p>
        <p>{startTime}</p>
      </Time>
      <WithPeriod>
        <Time>
          <img src="../../assets/end_time_icon.png" alt="" />
          <p>{endDate}</p>
          <p>{endTime}</p>
        </Time>
        <p>매주 화요일 반복</p>
      </WithPeriod>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 578px;
  height: 74px;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.Gray200};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px 26px;
  gap: 2px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  width: 299px;
  height: 26px;
  gap: 11px;
  margin-left: 5px;

  div {
    width: 10px;
    height: 10px;
    border-radius: 3px;
    background-color: #ff9292;
  }

  h2 {
    color: ${({ theme: { colors } }) => colors.Gray900};
    ${({ theme: { fonts } }) => fonts.SubHead2}
  }
`;

const Time = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 157px;
  height: 22px;
  padding: 0px 4px;
  gap: 8px;

  p {
    color: ${({ theme: { colors } }) => colors.Gray500};
    ${({ theme: { fonts } }) => fonts.Body2}
    width: 78px;
  }
`;

const WithPeriod = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: ${({ theme: { colors } }) => colors.Gray500};
    ${({ theme: { fonts } }) => fonts.Body2}
  }
`;
