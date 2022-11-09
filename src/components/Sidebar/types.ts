import {ReactNode} from 'react';

interface MenuChildItemsType {
  childIcon: ReactNode;
  childTitle: string;
}

export interface MenuItemsType {
  icon: ReactNode;
  title: string;
  children?: Array<MenuChildItemsType>;
}
