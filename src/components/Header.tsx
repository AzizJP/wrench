import styled from '@emotion/styled';
import {FC, memo} from 'react';

import {ReactComponent as Logo} from '../assets/logo.svg';
import {ReactComponent as PersonIcon} from '../assets/person-icon.svg';

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #4f27bf;
  width: 100%;
`;

const HeaderTitle = styled.h1`
  margin: 0;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
`;

const LogoWrapper = styled.span`
  margin: 16px 24px 16px 32px;
  & > svg {
    height: 48px;
    width: 48px;
  }
`;

const HeaderItemsContainer = styled.div`
  display: flex;
  margin: 0;
  align-items: center;
`;

const IconWrapper = styled.div`
  margin: 16px;
  & > svg {
    height: 48px;
    width: 48px;
  }
`;

const PersonTitle = styled.h2`
  margin: 28px 32px 28px 0;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
`;

const Header: FC = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderItemsContainer>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <HeaderTitle>Wrench CRM</HeaderTitle>
      </HeaderItemsContainer>
      <HeaderItemsContainer>
        <IconWrapper>
          <PersonIcon />
        </IconWrapper>
        <PersonTitle>Имя Фамилия</PersonTitle>
      </HeaderItemsContainer>
    </HeaderWrapper>
  );
});

export default Header;
