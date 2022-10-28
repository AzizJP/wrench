import styled from '@emotion/styled';
import {FC, memo} from 'react';

import {ReactComponent as Logo} from '../assets/logo.svg';
import {ReactComponent as PersonIcon} from '../assets/person-icon.svg';

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #4f27bf;
  padding: 16px 32px;
`;

const HeaderTitle = styled.h1`
  margin: 0;
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

const HeaderItemsContainer = styled.div<{gap: number}>`
  gap: ${({gap}) => gap}px;
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.span`
  & > svg {
    height: 48px;
    width: 48px;
  }
`;

const PersonTitle = styled.h2`
  margin: 0;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
`;

const Header: FC = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderItemsContainer gap={24}>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <HeaderTitle>Wrench CRM</HeaderTitle>
      </HeaderItemsContainer>
      <HeaderItemsContainer gap={16}>
        <IconWrapper>
          <PersonIcon />
        </IconWrapper>
        <PersonTitle>Имя Фамилия</PersonTitle>
      </HeaderItemsContainer>
    </HeaderWrapper>
  );
});

export default Header;
