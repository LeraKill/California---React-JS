import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.scss";
import Header from "./components/Any/Header/Header";
import Main from "./pages";
import About from "./pages/about";
import Cards from "./pages/cards";
import Footer from "./components/Any/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <main className="page">
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/cards" element={<Cards />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
