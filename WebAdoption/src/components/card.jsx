import "../assets/styles/components/card.css"

const Card = ({ title, description, imageUrl, buttonLabel, onClick }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <button className="card-button" onClick={onClick}>
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default Card;
