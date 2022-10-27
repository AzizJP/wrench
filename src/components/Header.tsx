import styled from '@emotion/styled';
import {FC, memo} from 'react';

import {ReactComponent as Logo} from '../assets/logo.svg';

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #add8e6;
`;

const HeaderTitle = styled.h1`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
`;

const LogoWrapper = styled.span`
  & > svg {
    height: 48px;
    width: 48px;
  }
`;

const Header: FC = memo(() => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <HeaderTitle>Helo</HeaderTitle>
    </HeaderWrapper>
  );
});

export default Header;
