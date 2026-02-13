

function Hero({ title, description, image, className }) {
    return (
        <div className={`hero ${className ?? ''}`}>
            <h1>{title}</h1>
            <p>{description}</p>
            <img src={image} alt="" fetchPriority="high" />
        </div>
    )
}

export default Hero;