import type { IAlbum } from './tables/type';

export interface IPageProps {
  page: number;
  table: IAlbum[];
}
export const Page = ({ page, table }: IPageProps) => {
  const items = table.filter((item) => item.page === page);

  const grouped = items.reduce((acc: IAlbum[][], item) => {
    if (!acc[item.group]) {
      acc[item.group] = [];
    }

    acc[item.group].push(item);

    return acc;
  }, []);

  return <div>{JSON.stringify(grouped, null, 2)}</div>;
};
