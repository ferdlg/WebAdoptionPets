import PropTypes from 'prop-types';
import '../../../assets/styles/utils/_banner.css';

const Banner = ({ imageUrl }) => {
  const bannerStyle = {
    backgroundImage: imageUrl ? `url(${imageUrl})` : 'none', // Usa la imagen solo si `imageUrl` tiene un valor
  };

  return (
    <div className="banner" style={bannerStyle}>
      <div className='div-text'>
        <p className='p-text'>No compres, !!Adopta!!</p>
      </div>
    
    </div>
  );
};

Banner.propTypes = {
  imageUrl: PropTypes.string,
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func,
};

Banner.defaultProps = {
  buttonText: 'Saber más',
  onButtonClick: () => alert('¡Botón de banner presionado!'),
};

export default Banner;
