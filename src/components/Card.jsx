import { Link } from "react-router-dom";

function Card({ title, description, image, price, to, priority }) {
  const content = (
    <>
      {image && (
        <div className="cardImage">
          <img
            src={image}
            alt={title}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : undefined}
          />
        </div>
      )}
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
