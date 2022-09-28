import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.scss";
import Header from "./components/Any/Header/Header";
import MainPage from "./pages";
import AboutPage from "./pages/about";
import CardsPage from "./pages/cards";
import Footer from "./components/Any/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <main className="page">
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/cards" element={<CardsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
