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
        icon: <ProfileSettings />,
        title: 'Настройки профиля',
      },
      {
        icon: <FinanceSettings />,
        title: 'Управление финансами',
      },
    ],
  },

  {
    icon: <Exit />,
    title: 'Выход',
  },
];

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
        {MenuItems.map(item => (
          <SidebarItem key={item.title} menuItem={item} />
        ))}
      </SidebarList>
    </SidebarWrapper>
  );
});

export default Sidebar;
