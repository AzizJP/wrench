import styled from '@emotion/styled';
import {FC, memo} from 'react';

import mq from '../../../types/common';

import SidebarItem from './SidebarItem';

const SidebarWrapper = styled.section`
  display: none;
  flex-direction: column;
  overflow: auto;
  width: 300px;
  height: 100%;
  box-shadow: 0px 0px 5px rgba(2, 0, 96, 0.25);
  ${mq[1]} {
    display: flex;
  }
`;

const SidebarTitle = styled.h3`
  margin: 24px 32px 12px;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #1c1c1e;
`;

const SidebarList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Sidebar: FC = memo(() => {
  return (
    <SidebarWrapper>
      <SidebarTitle>Меню</SidebarTitle>
      <SidebarList>
        <SidebarItem />
      </SidebarList>
    </SidebarWrapper>
  );
});

export default Sidebar;
