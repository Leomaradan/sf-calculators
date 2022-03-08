import { useEffect } from 'preact/hooks';
import { Link } from 'react-router-dom';
import { useLanguage, useLanguageResolver } from '../../lang/LanguageContext';
import type { IRouteMenu } from '../../router';

interface INavBarProps {
  tools: IRouteMenu[];
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
        <Link className="navbar-brand" to="/">
          {app.title}
        </Link>
        <button
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler"
          data-bs-target="#navbarCollapse"
          data-bs-toggle="collapse"
          type="button"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link aria-current="page" className="nav-link active" to="/">
                {app.home}
              </Link>
            </li>
            <li className="nav-item dropdown">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                aria-expanded="false"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                id="dropdownNav"
              >
                {app.tools}
              </a>
              <ul aria-labelledby="dropdownNav" className="dropdown-menu">
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
