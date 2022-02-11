
import "./App.css";
import Home from "./portfoliocomtainer/home/Home";
import Portfolio from "./portfoliocomtainer/portfolio/Portfolio";
import Footer from "./portfoliocomtainer/footer/Footer";
import NavBar from "./portfoliocomtainer/navBar/NavBar";
import About from "./portfoliocomtainer/about/About";
import Contact from "./portfoliocomtainer/contact/FormSingUp";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
          <Route path="/" element={<><Home /><About /> <Portfolio /> <Contact /></>} />
          <Route path="about" element={<About />} />
          <Route path="Portfolio" element={<Portfolio />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<><Home /></>} />
        </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
