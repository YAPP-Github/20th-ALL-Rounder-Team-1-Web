import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';
import styled from 'styled-components';

import { AlarmList } from '.';

import { Button } from '@/common/Button';
import { DimmedLayerContext } from '@/contexts';

export const Header = () => {
  const { pathname } = useLocation();
  const { isVisible, setIsVisible, setType } = useContext(DimmedLayerContext);

  const [alarmClicked, setAlarmClicked] = useState(false);

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

  const chkClicked = (query: string) => {
    if (pathname === query && !alarmClicked) {
      return true;
    }
    return false;
  };

  return (
    <Wrapper>
      <Link to="/">
        <img
          src="../../assets/weekand_logo.png"
          alt="위크엔드 홈으로 가기"
          width={149}
          height={40}
        />
      </Link>
      <Icons>
        <Link
          className={cn('category', chkClicked('/manage-category') && 'clicked')}
          to="/manage-category"
        >
          <BlindText>카테고리 관리 페이지로 이동하기</BlindText>
        </Link>
        <Link className={cn('search', chkClicked('/search') && 'clicked')} to="/search">
          <BlindText>검색 페이지로 이동하기</BlindText>
        </Link>
        <Button className={cn('alarm', alarmClicked && 'clicked')} onClick={onClickAlarm}>
          <BlindText>알림 확인하기</BlindText>
        </Button>
        <Link className={cn('setting', chkClicked('/setting') && 'clicked')} to="/setting">
          <BlindText>설정 페이지로 이동하기</BlindText>
        </Link>
      </Icons>
      {alarmClicked && <AlarmList />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 20px 0px 52px 0px;
  display: flex;
  justify-content: space-between;
`;

const Icons = styled.div`
  *:not(:first-child) {
    margin-left: 30px;
  }

  a,
  button {
    background-size: 455px 385px;
    display: inline-block;
    margin-top: 4px;
  }

  .category::before {
    content: '';
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 32, 32)};
    background-position: -269px -62px;
  }

  .category.clicked::before {
    background-position: -62px -251px;
  }

  .search::before {
    content: '';
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 32, 32)};
    background-position: -269px -10px;
  }

  .search.clicked::before {
    background-position: -10px -251px;
  }

  .alarm::before {
    content: '';
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 32, 32)};
    background-position: -269px -114px;
  }

  .alarm.clicked::before {
    background-position: -166px -251px;
  }

  .setting::before {
    content: '';
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 32, 32)};
    background-position: -269px -166px;
  }

  .setting.clicked::before {
    background-position: -114px -251px;
  }
`;

const BlindText = styled.span`
  ${({ theme: { sr_only } }) => sr_only}
`;
