

function Hero({ title, description, image }) {
    return (
        <div className="hero">
            <h1>{title}</h1>
            <p>{description}</p>
            <img src={image} alt="" fetchPriority="high" />
        </div>
    )
}

export default Hero;