import { useParams } from 'react-router-dom';
import { Page } from './Page';
import { items, mages, monsters, scouts, warriors } from './tables';

type ICategory = 'items' | 'mages' | 'monsters' | 'scouts' | 'warriors';

export const Category = () => {
  let table = monsters;
  const { category } = useParams<{ category: ICategory }>();

  switch (category) {
    case 'items':
      table = items;
      break;
    case 'mages':
      table = mages;
      break;
    case 'scouts':
      table = scouts;
      break;
    case 'warriors':
      table = warriors;
      break;

    case 'monsters':
    default:
      table = monsters;
      break;
  }

  const pages = table.reduce((acc: number[], item) => {
    if (!acc.includes(item.page)) {
      acc.push(item.page);
    }

    return acc;
  }, []);

  return (
    <div>
      {pages.map((page) => (
        <Page key={page} page={page} table={table} />
      ))}
    </div>
  );
};
