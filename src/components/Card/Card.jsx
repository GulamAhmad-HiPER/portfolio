import "./Card.css";
/* eslint-disable react/prop-types */
const Card = ({ image, name, highlighted, link }) => {
  return (
    <div className={`card ${highlighted ? "box_Shadow" : ""}`}>
      <img src={image} alt="project image" />
      <div className="details">
        <p>{name}</p>
        <button>
          {" "}
          <a href={link} target="__blank">
            {" "}
            View{" "}
          </a>
        </button>
      </div>
    </div>
  );
};

export default Card;
