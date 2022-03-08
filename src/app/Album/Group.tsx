import type { IAlbumItem } from '../../features/album/types';
import { useLanguageResolver } from '../../lang/LanguageContext';
import { Card } from '../components/Card/Card';
import type { IGroup } from './tables/type';

export interface IGroupProps {
  // resolve(groupName: string): string;
  group: IGroup;
  ownedItems: IAlbumItem[];
  page: number;
  tableName: string;
  getToggleItem(item: IAlbumItem): () => void;
}

export const Group = ({
  // resolve,
  getToggleItem,
  group,
  ownedItems,
  page,
  tableName,
}: IGroupProps) => {
  const resolve = useLanguageResolver();
  const imageStyleBase: JSX.CSSProperties =
    group.items.length > 1 ? { maxHeight: '20vh' } : { maxHeight: '40vh' };

  imageStyleBase.cursor = 'pointer';

  return (
    <Card
      footer={String(page)}
      header={`album.${tableName}.${group.name}`}
      heightViewport={50}
      isGridLayout={group.items.length > 1}
    >
      {group.items.map((id, index) => {
        const owned = ownedItems.find(
          (item) => item.id === id && item.group === group.groupId,
        );

        const imageStyle = owned
          ? imageStyleBase
          : { ...imageStyleBase, filter: 'brightness(0.5' };

        const toggleItem = getToggleItem({ group: group.groupId, id, page });

        return (
          <div
            key={`${page}_${group.groupId}_${id}`}
            onClick={toggleItem}
            onKeyPress={toggleItem}
            role="button"
            style={{ gridArea: `z${index + 1}` }}
            tabIndex={0}
          >
            <img
              alt={`${resolve(`album.${tableName}.${group.name}`)}_#${id}`}
              loading="lazy"
              src={`img/album/${tableName}_${page}_${group.groupId}_${id}.png`}
              style={imageStyle}
            />
          </div>
        );
      })}
    </Card>
  );
};
