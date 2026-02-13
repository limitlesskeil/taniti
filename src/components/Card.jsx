

function Card({ title, description, image }) {
    return (
        <div className="card">
            <div className="cardImage">
                <img src={image} alt={title} />
            </div>
            <div className="cardOverlay">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card;