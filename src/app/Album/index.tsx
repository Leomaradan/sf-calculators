import { Link } from 'react-router-dom';

export const Album = () => {
  const categories: { route: string; title: string }[] = [
    { route: '/album/monsters', title: 'Monsters' },
    { route: '/album/items', title: 'Common Items' },
    { route: '/album/warriors', title: 'Warrior Items' },
    { route: '/album/mages', title: 'Mage Items' },
    { route: '/album/scouts', title: 'Scout Items' },
  ];
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {categories.map(({ route, title }) => (
        <div className="col" key={route}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <Link to={route}>
                <i className="bi bi-calculator" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
