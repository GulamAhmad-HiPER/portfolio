import "./Card.css";
/* eslint-disable react/prop-types */
const Card = ({ image, name, highlighted }) => {
  return (
    <div className={`card ${highlighted ? "box_Shadow" : ""}`}>
      <img src={image} alt="project image" />
      <div className="details">
        <p>{name}</p>
        <button>View</button>
      </div>
    </div>
  );
};

export default Card;
