import { Link } from 'react-router-dom';
import { useLanguageResolver } from '../lang/LanguageContext';
import type { IRoute } from '../router';

interface IHomeProps {
  tools: IRoute[];
}

const Home = ({ tools }: IHomeProps) => {
  const resolver = useLanguageResolver();

  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {tools.map(({ route, title, description }) => (
        <div key={route} className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{resolver(title)}</h5>
              <p className="card-text">{resolver(description)}</p>
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

export default Home;
