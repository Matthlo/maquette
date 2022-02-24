import "./card.css";
const Card = ({ id, name, description}) => (
  <div key={id} className="cardContent">
    <div className="card-header">
      <p className="cardNumberCard">{id}</p>
    </div>
    <div className="cardRight">
      <p className="cardTitle">{name}</p>
      <p className="cardDesc">{description}</p>
    </div>
  </div>
);

export default Card;
