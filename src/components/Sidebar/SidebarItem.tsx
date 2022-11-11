import styled from '@emotion/styled';
import {FC, memo, useCallback, useState} from 'react';

import {ReactComponent as Arrow} from '../../assets/arrow-menu-icon.svg';

import {MenuItem} from './types';

const basePadding = 48;

interface MenuItemProp {
  menuItem: MenuItem;
  level?: number;
}

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

const ItemsWrapper = styled.div<{paddingLeft: number}>`
  display: flex;
  flex-direction: column;
  padding-left: ${({paddingLeft}) => paddingLeft}px;
`;

const SidebarItemArrowIcon = styled.span`
  margin-left: 51px;
  width: 15px;
  height: 15px;
  & > svg {
    height: 100%;
    width: 100%;
  }
  & > strong {
    & > svg {
      transform: rotate(180deg);
      height: 100%;
      width: 100%;
    }
  }
`;

const SidebarItem: FC<MenuItemProp> = memo(({menuItem, level = 0}) => {
  const {icon, title, children} = menuItem;
  const [isOpened, setIsOpened] = useState(false);
  const toggleOpen = useCallback(() => {
    if (children) {
      setIsOpened(!isOpened);
    }
  }, [isOpened, children]);

  return (
    <ItemsWrapper paddingLeft={basePadding * level}>
      <SidebarItemWrapper onClick={toggleOpen}>
        <SidebarItemIcon>{icon}</SidebarItemIcon>
        <SidebarItemName>{title}</SidebarItemName>
        {children && (
          <SidebarItemArrowIcon>
            {isOpened ? (
              <strong>
                <Arrow />
              </strong>
            ) : (
              <Arrow />
            )}
          </SidebarItemArrowIcon>
        )}
      </SidebarItemWrapper>
      {isOpened && children?.map(child => <SidebarItem key={child.title} menuItem={child} level={level + 1} />)}
    </ItemsWrapper>
  );
});

export default SidebarItem;
