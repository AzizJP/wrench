import {ReactNode} from 'react';

export interface MenuItemsType {
  icon: ReactNode;
  title: string;
  children?: Array<MenuItemsType>;
}
