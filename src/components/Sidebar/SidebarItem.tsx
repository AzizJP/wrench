import styled from '@emotion/styled';
import {FC, memo} from 'react';

import MenuItemsType from '../../../types/types';

const SidebarItemWrapper = styled.button`
  display: flex;
  align-items: center;
  padding: 20px 32px;
  gap: 16px;
  border: none;
  type: button;
  cursor: pointer;
  background-color: #fff;
  &:hover {
    background-color: rgba(79, 39, 191, 0.1);
  }
`;

const SidebarItemIcon = styled.span`
  width: 32px;
  height: 32px;
  & > svg {
    height: 100%;
    width: 100%;
  }
`;

const SidebarItemName = styled.h4`
  text-align: start;
  margin: 0;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #1c1c1e;
`;

const SidebarItem: FC<MenuItemsType> = memo(({icon, title}) => {
  return (
    <SidebarItemWrapper>
      <SidebarItemIcon>{icon}</SidebarItemIcon>
      <SidebarItemName>{title}</SidebarItemName>
    </SidebarItemWrapper>
  );
});

export default SidebarItem;
