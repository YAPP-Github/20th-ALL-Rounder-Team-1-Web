import styled from 'styled-components';

export const Header = () => {
  return (
    <Wrapper>
      <div>
        <Logo src="../../assets/weekand_logo.png" alt="Weekand Logo" />
      </div>
      <div>
        <Icon src="../../assets/write_icon.png" alt="Write Icon" />
        <Icon src="../../assets/search_icon.png" alt="Search Icon" />
        <Icon src="../../assets/alarm_icon.png" alt="Alarm Icon" />
        <Icon src="../../assets/setting_icon.png" alt="Setting Icon" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1120px;
  height: 32px;
  margin: 24px 0px 52px 0px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 150px;
  height: 40px;
`;

const Icon = styled.img`
  width: 32px;
  height: 32px;
  margin-left: 30px;
`;
