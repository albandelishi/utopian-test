function Card({ icon, cardTitle, cardText, cardButton, className }) {
  return (
    <>
      <div className={`card ${className}`}>
        <div className="card-body">
          {icon}
          <h3 className="card-title mb-3">{cardTitle}</h3>
          <p className="card-text">{cardText}</p>
          <div className="text-right">{cardButton}</div>
        </div>
      </div>
    </>
  );
}

export default Card;
