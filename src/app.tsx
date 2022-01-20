import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import getStore from './features/store';
import NavBar from './app/navigation/NavBar';
import './app.scss';
import Home from './app/Home';
import Fortress from './app/Fortress';
import LanguageProvider from './lang/LanguageProvider';
import 'bootstrap';
import type { IRoute } from './router';

const basepath = import.meta.env.BASE_URL;

const tools: IRoute[] = [
  {
    route: `${basepath}fortress`,
    title: 'fortress.title',
    description: 'fortress.description',
    page: Fortress,
  },
];

export function App() {
  const { persistor, store } = getStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LanguageProvider>
          <BrowserRouter>
            <NavBar tools={tools} />
            <main className="container">
              <div className="bg-light p-5 rounded">
                <Routes>
                  <Route path={basepath} element={<Home tools={tools} />} />
                  {tools.map(({ route, page: Page }) => (
                    <Route key={route} path={route} element={<Page />} />
                  ))}
                </Routes>
              </div>
            </main>
          </BrowserRouter>
        </LanguageProvider>
      </PersistGate>
    </Provider>
  );
}
