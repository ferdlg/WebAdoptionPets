
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HowToAdopt from './pages/howToAdopt.jsx';
import './assets/styles/base/_app.css';
import AboutUs from './components/landingPage/aboutUs/aboutUs.jsx';


function App() {
  return (
      <Router>
          <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/how-to-adopt" element={<HowToAdopt />} />
          <Route path="/about_us" element={<AboutUs />} />
        </Routes>
        </Router>
  );
}

export default App;
