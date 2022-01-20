import 'bootstrap';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './app.scss';
import Fortress from './app/Fortress/Fortress';
import Home from './app/Home';
import NavBar from './app/navigation/NavBar';
import getStore from './features/store';
import LanguageProvider from './lang/LanguageProvider';
import type { IRoute } from './router';

const tools: IRoute[] = [
  {
    description: 'fortress.description',
    page: Fortress,
    route: '/fortress',
    title: 'fortress.title',
  },
];

export function App() {
  const { persistor, store } = getStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LanguageProvider>
          <HashRouter>
            <NavBar tools={tools} />
            <main className="container">
              <div className="page-container p-5">
                <Routes>
                  <Route element={<Home tools={tools} />} path="/" />
                  {tools.map(({ page: Page, route }) => (
                    <Route element={<Page />} key={route} path={route} />
                  ))}
                </Routes>
              </div>
            </main>
          </HashRouter>
        </LanguageProvider>
      </PersistGate>
    </Provider>
  );
}
