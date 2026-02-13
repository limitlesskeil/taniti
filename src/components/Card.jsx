

function Card({ title, description, image, price }) {
    return (
        <div className="card">
            <div className="cardImage">
                <img src={image} alt={title} />
            </div>
            <div className="cardOverlay">
                <h3>{title}</h3>
                {price && <p className="card__price">{price}</p>}
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card;