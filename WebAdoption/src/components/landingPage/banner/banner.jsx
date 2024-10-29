import PropTypes from 'prop-types';
import '../../../assets/styles/utils/_banner.css';

const Banner = ({ imageUrl }) => {
  const bannerStyle = {
    backgroundImage: imageUrl ? `url(${imageUrl})` : 'none', // Usa la imagen solo si `imageUrl` tiene un valor
  };

  return (
    <div className="banner" style={bannerStyle}>
      <div className='banner__text-paragraph'>
        <p className='banner__text'>No compres, </p>
        <p className='banner__text'>!!Adopta!!</p>
      </div>
    </div>
  );
};

Banner.propTypes = {
  imageUrl: PropTypes.string,
};


export default Banner;
