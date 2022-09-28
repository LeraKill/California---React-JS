import { Routes, Route } from "react-router-dom";

import "./styles/global.scss";
import Header from "./components/Any/Header/Header";
import MainPage from "./pages";
import AboutPage from "./pages/about";
import ProductsPage from "./pages/products";
import Footer from "./components/Any/Footer/Footer";

function App() {
  const baseUrl = process.env.PUBLIC_URL;
  return (
    <div className="wrapper">
      <Header />
      <main className="page">
        <Routes>
          <Route exact path={baseUrl + "/"} element={<MainPage />} />
          <Route path={baseUrl + "/about"} element={<AboutPage />} />
          <Route path={baseUrl + "/products"} element={<ProductsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
