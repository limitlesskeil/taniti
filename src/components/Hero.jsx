function Hero({ title, description, image, className }) {
  return (
    <div className={`hero ${className ?? ""}`}>
      <h1>{title ?? description ?? ""}</h1>
      <p>{description ?? ""}</p>
      <img src={image} alt={title ?? description ?? ""} fetchPriority="high" />
    </div>
  );
}

export default Hero;
