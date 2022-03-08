import { useEffect } from 'preact/hooks';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../lang/LanguageContext';
import { Card } from '../components/Card/Card';
import { run } from './tables/update';

export const Album = () => {
  const categories: { route: string; title: string; image: string }[] = [
    {
      image: 'img/album/monsters_1_0_0.png',
      route: '/album/monsters',
      title: 'Monsters',
    },
    {
      image: 'img/album/items_1_0_0.png',
      route: '/album/items',
      title: 'Common Items',
    },
    {
      image: 'img/album/warriors_1_0_0.png',
      route: '/album/warriors',
      title: 'Warrior Items',
    },
    {
      image: 'img/album/mages_1_0_0.png',
      route: '/album/mages',
      title: 'Mage Items',
    },
    {
      image: 'img/album/scouts_1_0_0.png',
      route: '/album/scouts',
      title: 'Scout Items',
    },
  ];
  const {
    album: { title: albumTitle },
  } = useLanguage();

  useEffect(() => {
    run();
  }, []);
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {categories.map(({ image, route, title }) => (
        <div className="col" key={route}>
          <Card image={image} imageSize={25} title={title}>
            <Link to={route}>{albumTitle}</Link>
          </Card>
        </div>
      ))}
    </div>
  );
};
