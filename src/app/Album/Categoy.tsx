import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../../lang/LanguageContext';
import { Page } from './Page';
import { items, mages, monsters, scouts, warriors } from './tables';
import type { IAlbum } from './tables/type';

type ICategory = 'items' | 'mages' | 'monsters' | 'scouts' | 'warriors';

export const Category = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let pages: IAlbum<any>[] = monsters;
  let { category } = useParams<{ category: ICategory }>();
  const { album } = useLanguage();

  switch (category) {
    case 'items':
      pages = items;
      break;
    case 'mages':
      pages = mages;
      break;
    case 'scouts':
      pages = scouts;
      break;
    case 'warriors':
      pages = warriors;
      break;

    case 'monsters':
    default:
      pages = monsters;
      category = 'monsters';
      break;
  }

  const pageRange = new Array(pages[pages.length - 1].page)
    .fill(0)
    .map((_, index) => index + 1);

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/album">{album.title}</Link>
          </li>
          <li aria-current="page" className="breadcrumb-item active">
            {album[`${category}Title`]}
          </li>
        </ol>
      </nav>
      <section className="row">
        {pageRange.map((pageIndex) => {
          const page = pages.find((p) => p.page === pageIndex);

          if (page) {
            return (
              <Page
                key={pageIndex}
                page={page}
                tableName={category as ICategory}
              />
            );
          }

          return (
            <Page
              key={pageIndex}
              page={{ groups: [], page: pageIndex }}
              tableName={category as ICategory}
            />
          );
        })}
      </section>
    </div>
  );
};
