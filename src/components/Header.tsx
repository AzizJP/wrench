import styled from '@emotion/styled';
import {FC, memo} from 'react';

import {ReactComponent as Logo} from '../assets/logo.svg';
import {ReactComponent as PersonIcon} from '../assets/person-icon.svg';

const breakpoints: Array<number> = [420, 768];
const mq: Array<string> = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

const HeaderWrapper = styled.div`
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

const HeaderItemsContainer = styled.div<{gap: number}>`
  gap: ${({gap}) => gap}px;
  display: flex;
  align-items: center;
`;

const Header: FC = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderItemsContainer gap={24}>
        <IconWrapper>
          <Logo />
        </IconWrapper>
        <HeaderTitle>Wrench CRM</HeaderTitle>
      </HeaderItemsContainer>
      <HeaderItemsContainer gap={16}>
        <IconWrapper>
          <PersonIcon />
        </IconWrapper>
        <HeaderTitle>Имя Фамилия</HeaderTitle>
      </HeaderItemsContainer>
    </HeaderWrapper>
  );
});

export default Header;
