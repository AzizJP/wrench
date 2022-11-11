import {ReactNode} from 'react';

export interface MenuItem {
  icon: ReactNode;
  title: string;
  children?: Array<MenuItem>;
}
