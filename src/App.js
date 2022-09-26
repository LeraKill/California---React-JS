import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.scss";
import Header from "./components/Header/Header";
import Main from "./pages";
import About from "./pages/about";
import Cards from "./pages/cards";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/cards" element={<Cards />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
