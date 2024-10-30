
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import HowToAdopt from './pages/howToAdopt/howToAdopt.jsx';
import './assets/styles/base/_app.css';
import Dogs from './pages/dogs/dogs';
import Cats from './pages/cats/cats';
import Layout from "./components/layout.jsx";
import Cart from "./components/cart/cart.jsx";


function App() {
  return (
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/how-to-adopt" element={<HowToAdopt />} />
            <Route path="/dogs" element={<Dogs/>} />
            <Route path="/cats" element={<Cats/>} />
            <Route path="/adoption-list" element={<Cart/>} />
          </Routes>
        </Layout>
      </Router>
  );
}

export default App;
