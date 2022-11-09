import styled from '@emotion/styled';
import {FC, memo, useCallback, useState} from 'react';

import {ReactComponent as Arrow} from '../../assets/arrow-menu-icon.svg';
import {ReactComponent as Calendar} from '../../assets/calendar-menu-icon.svg';
import {ReactComponent as Exit} from '../../assets/exit-menu-icon.svg';
import {ReactComponent as FinanceSettings} from '../../assets/finance-settings-icon.svg';
import {ReactComponent as Location} from '../../assets/location-menu-icon.svg';
import {ReactComponent as Main} from '../../assets/main-menu-icon.svg';
import {ReactComponent as ProfileSettings} from '../../assets/profile-settings-icon.svg';
import {ReactComponent as Search} from '../../assets/search-menu-icon.svg';
import {ReactComponent as Settings} from '../../assets/settings-menu-icon.svg';
import {ReactComponent as Table} from '../../assets/table-menu-icon.svg';
import {ReactComponent as Widget} from '../../assets/widget-menu-icon.svg';

import {MenuItemsType} from './types';

const MenuItems: Array<MenuItemsType> = [
  {
    icon: <Main />,
    title: 'Главная',
  },
  {
    icon: <Search />,
    title: 'Поиск адресов',
  },
  {
    icon: <Table />,
    title: 'Таблицы',
  },
  {
    icon: <Calendar />,
    title: 'Календарь',
  },
  {
    icon: <Location />,
    title: 'Карты',
  },
  {
    icon: <Widget />,
    title: 'Виджеты',
  },
  {
    icon: <Settings />,
    title: 'Настройки',
    children: [
      {
        childIcon: <ProfileSettings />,
        childTitle: 'Настройки профиля',
      },
      {
        childIcon: <FinanceSettings />,
        childTitle: 'Управление финансами',
      },
    ],
  },

  {
    icon: <Exit />,
    title: 'Выход',
  },
];

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

const SettingsItemWrapper = styled.li`
  display: flex;
  padding: 16px 0 16px 80px;
  gap: 32px;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: rgba(79, 39, 191, 0.1);
  }
  &:first-of-type {
    padding-top: 12px;
  }
  &:last-of-type {
    padding-bottom: 20px;
  }
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SettingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

const SidebarItem: FC = memo(() => {
  const [isOpened, setIsOpened] = useState(false);
  const settingsToogler = useCallback(() => {
    setIsOpened(!isOpened);
  }, [isOpened]);

  return (
    <>
      {MenuItems.map(({icon, title, children}) => (
        <ItemsWrapper key={title}>
          <SidebarItemWrapper onClick={children && settingsToogler}>
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
          {children &&
            isOpened &&
            children.map(({childIcon, childTitle}) => (
              <SettingsWrapper key={childTitle}>
                <SettingsItemWrapper>
                  <SidebarItemIcon>{childIcon}</SidebarItemIcon>
                  <SidebarItemName>{childTitle}</SidebarItemName>
                </SettingsItemWrapper>
              </SettingsWrapper>
            ))}
        </ItemsWrapper>
      ))}
      ;
    </>
  );
});

export default SidebarItem;
