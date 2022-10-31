import styled from '@emotion/styled';
import {FC, memo} from 'react';

import mq from '../../../types/common';
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

import SidebarItem from './SidebarItem';

const MenuData = [
  {
    icon: Main,
    title: 'Главная',
  },
  {
    icon: Search,
    title: 'Поиск адресов',
  },
  {
    icon: Table,
    title: 'Таблицы',
  },
  {
    icon: Calendar,
    title: 'Календарь',
  },
  {
    icon: Location,
    title: 'Карты',
  },
  {
    icon: Widget,
    title: 'Виджеты',
  },
  {
    icon: Settings,
    title: 'Настройки',
  },
  {
    icon: ProfileSettings,
    title: 'Настройки профиля',
  },
  {
    icon: FinanceSettings,
    title: 'Управление финансами',
  },
  {
    icon: Exit,
    title: 'Выход',
  },
];

const SidebarWrapper = styled.div`
  display: none;
  flex-direction: column;
  position: fixed;
  overflow: auto;
  width: 300px;
  height: 100%;
  top: 80;
  left: 0;
  box-shadow: 0px 0px 5px rgba(2, 0, 96, 0.25);
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: #d1d1d1;
  }
  ${mq[1]} {
    display: flex;
  }
`;

const SidebarTitle = styled.h3`
  margin: 24px 32px 0;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #1c1c1e;
`;

const SidebarList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 12px 0 0;
  padding: 0;
`;

const Sidebar: FC = memo(() => {
  return (
    <SidebarWrapper>
      <SidebarTitle>Меню</SidebarTitle>
      <SidebarList>
        {MenuData.map((menuItem, index) => (
          <SidebarItem icon={<menuItem.icon />} title={menuItem.title} key={index} />
        ))}
      </SidebarList>
    </SidebarWrapper>
  );
});

export default Sidebar;
