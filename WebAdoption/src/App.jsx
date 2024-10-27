
import LandingPage from "./pages/LandingPage";
import './assets/styles/base/_app.css';
import Banner from "./components/landingPage/banner/banner.jsx";
import bannerImage from './assets/images/banner.png'; 


function App() {
  return (
    <div>
      <Banner
        imageUrl = {bannerImage }
      />
      <div className="App">
        <LandingPage />
      </div>
    </div>
  );
}

export default App;
