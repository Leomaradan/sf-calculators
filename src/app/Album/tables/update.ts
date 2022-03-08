import { mages } from './mages';
import { monsters } from './monsters';
import { scouts } from './scouts';
import type { IAlbum, IAlbumOld } from './type';
import { warriors } from './warriors';

const convert = (baseItem: IAlbumOld<any>[]) => {
  const newItems: IAlbum[] = [];

  baseItem.forEach((item) => {
    let pageIndex = newItems.findIndex((i) => i.page === item.page);
    if (pageIndex === -1) {
      newItems.push({ groups: [], page: item.page });
      pageIndex = newItems.length - 1;
    }

    const page = newItems[pageIndex];

    let groupIndex = page.groups.findIndex((g) => g.groupId === item.group);

    if (groupIndex === -1) {
      page.groups.push({ groupId: item.group, items: [], name: item.name });
      groupIndex = page.groups.length - 1;
    }

    const group = page.groups[groupIndex];

    if (!group.items.includes(item.id)) {
      group.items.push(item.id);
    }
  });

  return newItems.map((page) => {
    const groups = page.groups
      .sort((a, b) => a.groupId - b.groupId)
      .map((group, index) => ({ ...group, groupId: index }));

    return { ...page, groups };
  });
};

const exportString = (category: string, newItems: IAlbum<any>[]) => {
  const result = `import type { ${category} } from '../../../lang/type';
    import type { IAlbum } from './type';
    
    export const scouts: IAlbum<${category}>[] = ${JSON.stringify(newItems)}`;

  console.log(result);
};

export const run = () => {
  const newmonsters: IAlbum<any>[] = convert(monsters);
  const newwarriors: IAlbum<any>[] = convert(warriors);
  const newmages: IAlbum<any>[] = convert(mages);
  const newscouts: IAlbum<any>[] = convert(scouts);

  exportString('ILanguageAlbumMonsters', newmonsters);
  exportString('ILanguageAlbumWarriors', newwarriors);
  exportString('ILanguageAlbumMages', newmages);
  exportString('ILanguageAlbumScouts', newscouts);
  // console.log({ items, newItems });
};
