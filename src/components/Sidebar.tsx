import styled from '@emotion/styled';
import {FC, memo} from 'react';

import mq from '../../types/common';
import {ReactComponent as Arrow} from '../assets/arrow-menu-icon.svg';
import {ReactComponent as Calendar} from '../assets/calendar-menu-icon.svg';
import {ReactComponent as Exit} from '../assets/exit-menu-icon.svg';
import {ReactComponent as FinanceSettings} from '../assets/finance-settings-icon.svg';
import {ReactComponent as Location} from '../assets/location-menu-icon.svg';
import {ReactComponent as Main} from '../assets/main-menu-icon.svg';
import {ReactComponent as Menu} from '../assets/menu.svg';
import {ReactComponent as ProfileSettings} from '../assets/profile-settings-icon.svg';
import {ReactComponent as Search} from '../assets/search-menu-icon.svg';
import {ReactComponent as Settings} from '../assets/settings-menu-icon.svg';
import {ReactComponent as Table} from '../assets/table-menu-icon.svg';
import {ReactComponent as Widget} from '../assets/widget-menu-icon.svg';

const SidebarWrapper = styled.section`
  position: relative;
  height: calc(100% - 40px);
  ${mq[0]} {
    height: calc(100% - 60px);
  }
  ${mq[1]} {
    height: calc(100% - 80px);
  }
`;

const SidebarContainer = styled.div`
  display: none;
  flex-direction: column;
  position: fixed;
  top: 80;
  left: 0;
  width: 300px;
  height: calc(100% - 48px);
  box-shadow: 0px 0px 5px rgba(2, 0, 96, 0.25);
  overflow: auto;
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: #d1d1d1;
  }
  ${mq[1]} {
    display: flex;
  }
`;

const SidebarButton = styled.button`
  margin: 8px 12px;
  padding: 0;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  background-color: #ffffff0d;
  border: none;
  cursor: pointer;
  & > svg {
    height: 100%;
    width: 100%;
  }
  ${mq[0]} {
    margin: 12px 24px;
    width: 50px;
    height: 50px;
  }
  ${mq[1]} {
    display: none;
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

const SidebarItemWrapper = styled.li`
  display: flex;
  padding: 20px 32px;
  gap: 16px;
  align-items: center;
  cursor: pointer;
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
  margin: 0;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #1c1c1e;
`;

const SidebarArrow = styled.span`
  width: 15px;
  height: 15px;
`;

const SettingsList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
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

const Sidebar: FC = memo(() => {
  return (
    <SidebarWrapper>
      <SidebarButton>
        <Menu />
      </SidebarButton>
      <SidebarContainer>
        <SidebarTitle>Меню</SidebarTitle>
        <SidebarList>
          <SidebarItemWrapper>
            <SidebarItemIcon>
              <Main />
            </SidebarItemIcon>
            <SidebarItemName>Главная</SidebarItemName>
          </SidebarItemWrapper>
          <SidebarItemWrapper>
            <SidebarItemIcon>
              <Search />
            </SidebarItemIcon>
            <SidebarItemName>Поиск адресов</SidebarItemName>
          </SidebarItemWrapper>
          <SidebarItemWrapper>
            <SidebarItemIcon>
              <Table />
            </SidebarItemIcon>
            <SidebarItemName>Таблицы</SidebarItemName>
          </SidebarItemWrapper>
          <SidebarItemWrapper>
            <SidebarItemIcon>
              <Calendar />
            </SidebarItemIcon>
            <SidebarItemName>Календарь</SidebarItemName>
          </SidebarItemWrapper>
          <SidebarItemWrapper>
            <SidebarItemIcon>
              <Location />
            </SidebarItemIcon>
            <SidebarItemName>Карты</SidebarItemName>
          </SidebarItemWrapper>
          <SidebarItemWrapper>
            <SidebarItemIcon>
              <Widget />
            </SidebarItemIcon>
            <SidebarItemName>Виджеты</SidebarItemName>
          </SidebarItemWrapper>
          <SidebarItemWrapper>
            <SidebarItemIcon>
              <Settings />
            </SidebarItemIcon>
            <SidebarItemName>Настройки</SidebarItemName>
            <SidebarArrow>
              <Arrow />
            </SidebarArrow>
          </SidebarItemWrapper>
          <SettingsList>
            <SettingsItemWrapper>
              <SidebarItemIcon>
                <ProfileSettings />
              </SidebarItemIcon>
              <SidebarItemName>Настройки профиля</SidebarItemName>
            </SettingsItemWrapper>
            <SettingsItemWrapper>
              <SidebarItemIcon>
                <FinanceSettings />
              </SidebarItemIcon>
              <SidebarItemName>Управление финансами</SidebarItemName>
            </SettingsItemWrapper>
          </SettingsList>
          <SidebarItemWrapper>
            <SidebarItemIcon>
              <Exit />
            </SidebarItemIcon>
            <SidebarItemName>Выход</SidebarItemName>
          </SidebarItemWrapper>
        </SidebarList>
      </SidebarContainer>
    </SidebarWrapper>
  );
});

export default Sidebar;
