import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HowToAdopt from './pages/howToAdopt.jsx';
import './assets/styles/base/_app.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/how-to-adopt" element={<HowToAdopt />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
