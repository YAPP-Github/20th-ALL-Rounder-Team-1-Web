import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

export const Header = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <Wrapper>
      <div>
        <Link to="/">
          <Logo src="../../assets/weekand_logo.png" alt="Weekand Logo" />
        </Link>
      </div>
      <div>
        <Icon src="../../assets/write_icon.png" alt="Write Icon" />
        <Link to="/search">
          <Icon src="../../assets/search_icon.png" alt="Search Icon" />
        </Link>
        <Icon src="../../assets/alarm_icon.png" alt="Alarm Icon" />
        <Link to="/setting">
          <Icon src="../../assets/setting_icon.png" alt="Setting Icon" />
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
