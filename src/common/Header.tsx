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
          {pathname === '/manage-category' && !alarmClicked ? (
            <Icon className="manage-category" isClicked={true} />
          ) : (
            <Icon className="manage-category" isClicked={false} />
          )}
        </Link>
        <Link to="/search">
          {pathname === '/search' && !alarmClicked ? (
            <Icon className="search" isClicked={true} />
          ) : (
            <Icon className="search" isClicked={false} />
          )}
        </Link>
        <button onClick={onClickAlarm}>
          {alarmClicked ? (
            <Icon className="alarm" isClicked={true} />
          ) : (
            <Icon className="alarm" isClicked={false} />
          )}
        </button>
        <Link to="/setting">
          {pathname === '/setting' && !alarmClicked ? (
            <Icon className="setting" isClicked={true} />
          ) : (
            <Icon className="setting" isClicked={false} />
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

const Icon = styled.i<{ isClicked: boolean }>`
  width: 32px;
  height: 32px;
  margin-left: 30px;

  &.manage-category {
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 32, 32)}
    ${({ isClicked }) =>
      isClicked ? `background-position: -62px -251px;` : `background-position: -269px -62px;`}
  }

  &.search {
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 32, 32)}
    ${({ isClicked }) =>
      isClicked ? `background-position: -10px -251px;` : `background-position: -269px -10px;`}
  }

  &.alarm {
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 32, 32)}
    ${({ isClicked }) =>
      isClicked ? `background-position: -166px -251px;` : `background-position: -269px -114px;`}
  }

  &.setting {
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 32, 32)}
    ${({ isClicked }) =>
      isClicked ? `background-position: -114px -251px;` : `background-position: -269px -166px;`}
  }
`;
