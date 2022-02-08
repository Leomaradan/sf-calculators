import type { JSX } from 'preact';

export interface IRouteMenu {
  description: string;
  route: string;
  title: string;
  page: () => JSX.Element;
}

export interface IRouteChild {
  inMenu: false;
  route: string;
  page: () => JSX.Element;
}

export type IRoute = IRouteChild | IRouteMenu;
