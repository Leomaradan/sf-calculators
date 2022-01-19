import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Fortress from "./app/Fortress";
import getStore from "./features/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./app/Home";
import NavBar from "./app/navigation/NavBar";
import "./app.css";

export function App() {
  const { persistor, store } = getStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <NavBar />
          <main class="container">
            <div class="bg-light p-5 rounded">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/fortress" element={<Fortress />} />
              </Routes>
            </div>
          </main>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}
