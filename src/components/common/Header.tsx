import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

export const Header = () => {
  const [alarmClicked, setAlarmClicked] = useState(false);
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <div>
        <Link to="/">
          <Logo src="../../assets/weekand_logo.png" alt="Weekand Logo" />
        </Link>
      </div>
      <div>
        <Link to="/addRoutine">
          <Icon src="../../assets/write_icon.png" alt="Write Icon" />
        </Link>
        <Link to="/search">
          {pathname === '/search' ? (
            <Icon src="../../assets/search_icon_clicked.png" alt="Search Icon" />
          ) : (
            <Icon src="../../assets/search_icon.png" alt="Search Icon" />
          )}
        </Link>
        <button onClick={() => setAlarmClicked(!alarmClicked)}>
          {alarmClicked ? (
            <Icon src="../../assets/alarm_icon_clicked.png" alt="Alarm Icon" />
          ) : (
            <Icon src="../../assets/alarm_icon.png" alt="Alarm Icon" />
          )}
        </button>
        <Link to="/setting">
          {pathname === '/setting' ? (
            <Icon src="../../assets/setting_icon_clicked.png" alt="Setting Icon" />
          ) : (
            <Icon src="../../assets/setting_icon.png" alt="Setting Icon" />
          )}
        </Link>
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

const Button = styled.button``;
