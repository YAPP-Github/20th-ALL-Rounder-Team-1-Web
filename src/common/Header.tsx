import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { AlarmList } from './AlarmList';

import { DimmedLayerContext } from '@/contexts';

export const Header = () => {
  const [alarmClicked, setAlarmClicked] = useState(false);
  const { pathname } = useLocation();
  const { isVisible, setIsVisible, setType } = useContext(DimmedLayerContext);

  const onClickAlarm = () => {
    setAlarmClicked(!alarmClicked);
    setIsVisible(!isVisible);
    setType('transparent');
  };

  useEffect(() => {
    if (!isVisible && alarmClicked) {
      setAlarmClicked(!alarmClicked);
    }
  }, [isVisible]);

  return (
    <Wrapper>
      <div>
        <Link to="/">
          <Logo src="../../assets/weekand_logo.png" alt="Weekand Logo" />
        </Link>
      </div>
      <div>
        <Link to="/manage-category">
          <Icon src="../../assets/manage_icon.png" alt="Write Icon" />
        </Link>
        <Link to="/search">
          {pathname === '/search' && !alarmClicked ? (
            <Icon src="../../assets/search_icon_clicked.png" alt="Search Icon" />
          ) : (
            <Icon src="../../assets/search_icon.png" alt="Search Icon" />
          )}
        </Link>
        <button onClick={onClickAlarm}>
          {alarmClicked ? (
            <Icon src="../../assets/alarm_icon_clicked.png" alt="Alarm Icon" />
          ) : (
            <Icon src="../../assets/alarm_icon.png" alt="Alarm Icon" />
          )}
        </button>
        <Link to="/setting">
          {pathname === '/setting' && !alarmClicked ? (
            <Icon src="../../assets/setting_icon_clicked.png" alt="Setting Icon" />
          ) : (
            <Icon src="../../assets/setting_icon.png" alt="Setting Icon" />
          )}
        </Link>
      </div>
      {alarmClicked && <AlarmList />}
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
