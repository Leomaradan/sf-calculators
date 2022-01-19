import { Provider } from "react-redux";
import Fortress from "./app/Fortress";
import store from "./features/store";
import { Stats } from "./app/components/Stats";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./app/Home";
import NavBar from "./app/navigation/NavBar";
import "./app.css";

export function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}
