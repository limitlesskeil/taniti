import { Link } from "react-router-dom";

function Card({ title, description, image, price, guests, to, priority }) {
  const content = (
    <>
      {image && (
        <div className="cardImage">
          <img
            src={image}
            alt={title ?? description ?? ""}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : undefined}
          />
        </div>
      )}
      <div className="cardOverlay">
        <h3>{title}</h3>
        {(price || guests) && (
          <p className="card__meta">
            {price}
            {price && guests && " · "}
            {guests}
          </p>
        )}
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
