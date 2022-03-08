import { Link } from 'react-router-dom';
import type { IRouteMenu } from '../router';
import { Card } from './components/Card/Card';

interface IHomeProps {
  tools: IRouteMenu[];
}

const Home = ({ tools }: IHomeProps) => (
  <div className="row row-cols-1 row-cols-md-2 g-4">
    {tools.map(({ description, route, title }) => (
      <div className="col" key={route}>
        <Card description={description} title={title}>
          <Link to={route}>
            <i className="bi bi-calculator" />
          </Link>
        </Card>
      </div>
    ))}
  </div>
);

export default Home;
