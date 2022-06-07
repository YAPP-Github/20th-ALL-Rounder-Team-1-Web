import styled from 'styled-components';

export const CalenderHeader = ({ date, setDate }: any) => {
  const changegeMonth = (date: any, changeString: string) => {
    switch (changeString) {
      case 'add':
        return setDate(date.add(1, 'month'));
      case 'subtract':
        return setDate(date.subtract(1, 'month'));
      default:
        return date;
    }
  };

  return (
    <StyledHeader>
      <span className="thisMonth">
        {date.format('YYYY')}년 {date.format('M')}월
      </span>
      <button className="previous_icon" onClick={() => changegeMonth(date, 'subtract')}></button>
      <button className="next_icon" onClick={() => changegeMonth(date, 'add')}></button>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  margin-bottom: 29px;
  .thisMonth {
    ${({ theme: { fonts } }) => fonts.SubHead1};
    float: left;
  }
  button {
    width: 24px;
    margin: 0 8px;
  }
  .previous_icon {
    width: 24px;
    height: 24px;
  }
  .next_icon {
    width: 24px;
    height: 24px;
  }
`;
