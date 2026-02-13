import { Link } from "react-router-dom";

function Card({ title, description, image, price, to }) {
  const content = (
    <>
      <div className="cardImage">
        <img src={image} alt={title} />
      </div>
      <div className="cardOverlay">
        <h3>{title}</h3>
        {price && <p className="card__price">{price}</p>}
        <p>{description}</p>
      </div>
    </>
  );

  if (to) {
    return (
      <Link to={to} className="card card--link">
        {content}
      </Link>
    );
  }

  return <div className="card">{content}</div>;
}

export default Card;
