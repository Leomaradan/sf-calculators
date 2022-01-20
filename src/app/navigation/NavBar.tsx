import { useEffect } from 'preact/hooks';
import { Link } from 'react-router-dom';
import type { IRoute } from 'src/router';
import { useLanguage, useLanguageResolver } from '../../lang/LanguageContext';

interface INavBarProps {
  tools: IRoute[];
}

const NavBar = ({ tools }: INavBarProps) => {
  const { app } = useLanguage();
  const resolver = useLanguageResolver();

  useEffect(() => {
    document.title = app.title;
  }, [app.title]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to={import.meta.env.BASE_URL}>
          {app.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to={import.meta.env.BASE_URL}
              >
                {app.home}
              </Link>
            </li>
            <li className="nav-item dropdown">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownNav"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {app.tools}
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownNav">
                {tools.map(({ route, title }) => (
                  <li key={route}>
                    <Link className="dropdown-item" to={route}>
                      {resolver(title)}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
