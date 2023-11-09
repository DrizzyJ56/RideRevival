import { Routes, Route } from "react-router-dom";
import { Navbar, Home, Coating, Footer, OtherNav, Services, About } from "./components/index";

const App = () => {
  return (
    <div id="main">
      <div>
        <OtherNav />
      </div>
      <div id="navbar-container" className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div id="content-container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/ceramic" element={<Coating />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      <div id="footer-container" className="relative z-0">
        <Footer />
      </div>
    </div>
  );
};

export default App;
