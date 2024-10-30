
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import HowToAdopt from './pages/howToAdopt/howToAdopt.jsx';
import './assets/styles/base/_app.css';
<<<<<<< HEAD
import AboutUs from './components/landingPage/aboutUs/aboutUs.jsx';
=======
import Dogs from './pages/dogs/dogs';
import Cats from './pages/cats/cats';
import Layout from "./components/layout.jsx";
>>>>>>> d97510f07cb7eb238a17416b0a1bad38dce09ffc


function App() {
  return (
      <Router>
        <Layout>
          <Routes>
<<<<<<< HEAD
          <Route path="/" element={<LandingPage />} />
          <Route path="/how-to-adopt" element={<HowToAdopt />} />
          <Route path="/about_us" element={<AboutUs />} />
        </Routes>
        </Router>
=======
            <Route path="/" element={<LandingPage />} />
            <Route path="/how-to-adopt" element={<HowToAdopt />} />
            <Route path="/dogs" element={<Dogs/>} />
            <Route path="/cats" element={<Cats/>} />
          </Routes>
        </Layout>
      </Router>
>>>>>>> d97510f07cb7eb238a17416b0a1bad38dce09ffc
  );
}

export default App;
