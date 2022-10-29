import styled from '@emotion/styled';
import {FC, memo} from 'react';

import mq from '../../types/common';

import {ReactComponent as Logo} from '../assets/logo.svg';
import {ReactComponent as PersonIcon} from '../assets/person-icon.svg';

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #4f27bf;
  padding: 8px 12px;
  ${mq[0]} {
    padding: 12px 24px;
  }
  ${mq[1]} {
    padding: 16px 32px;
  }
`;

const HeaderTitle = styled.h2`
  margin: 0;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
  ${mq[0]} {
    font-size: 16px;
    line-height: 20px;
  }
  ${mq[1]} {
    font-size: 20px;
    line-height: 24px;
  }
`;

const IconWrapper = styled.span`
  height: 24px;
  width: 24px;
  & > svg {
    height: 100%;
    width: 100%;
  }
  ${mq[0]} {
    height: 36px;
    width: 36px;
  }
  ${mq[1]} {
    height: 48px;
    width: 48px;
  }
`;

const HeaderItemsContainer = styled.div<{logo: boolean}>`
  gap: ${({logo}) => (logo ? 12 : 8)}px;
  display: flex;
  align-items: center;
  ${mq[0]} {
    gap: ${({logo}) => (logo ? 20 : 12)}px;
  }
  ${mq[1]} {
    gap: ${({logo}) => (logo ? 24 : 16)}px;
  }
`;

const Header: FC = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderItemsContainer logo>
        <IconWrapper>
          <Logo />
        </IconWrapper>
        <HeaderTitle>Wrench CRM</HeaderTitle>
      </HeaderItemsContainer>
      <HeaderItemsContainer logo={false}>
        <IconWrapper>
          <PersonIcon />
        </IconWrapper>
        <HeaderTitle>Имя Фамилия</HeaderTitle>
      </HeaderItemsContainer>
    </HeaderWrapper>
  );
});

export default Header;
