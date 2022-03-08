import { useCallback } from 'preact/hooks';
import { useDispatch } from 'react-redux';
import { toggle } from '../../features/album/albumSlice';
import type { IAlbumItem } from '../../features/album/types';
import { useAlbumPage } from '../../features/hooks';
import { Group } from './Group';
import type { IAlbum } from './tables/type';

type ICategory = 'items' | 'mages' | 'monsters' | 'scouts' | 'warriors';

export interface IPageProps {
  page: IAlbum;
  tableName: ICategory;
}

export const Page = ({ page, tableName }: IPageProps) => {
  const ownedItems = useAlbumPage(tableName, page.page);
  const dispatch = useDispatch();
  const getToggleItem = useCallback(
    (item: IAlbumItem) => () => {
      dispatch(toggle({ category: tableName, item }));
    },
    [dispatch, tableName],
  );

  return (
    <div className="col-6">
      {page.groups.map((group) => (
        <Group
          getToggleItem={getToggleItem}
          group={group}
          key={group.name}
          ownedItems={ownedItems}
          page={page.page}
          tableName={tableName}
        />
      ))}
    </div>
  );
};
