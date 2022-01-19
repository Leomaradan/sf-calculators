import type { JSX } from 'preact';

export interface IRoute {
  route: string;
  title: string;
  description: string;
  page: () => JSX.Element;
}
