import React from "react";
import Button from "./Button";
import Img from "./Img";
import "./Card.css";
import { useState } from "react";

const Card = (props) => {
  const [cardColor, setCardColor] = useState(false);

  function handleMouseOver() {
    setCardColor(true);
  }

  function handleMouseOut() {
    setCardColor(false);
  }

  return (
    <section
      className="container"
      style={{
        backgroundColor: cardColor ? "#1d2671" : "rgba(255, 255, 255, 0.1)",
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div>
        <Img />
      </div>
      <div>
        <h2>{props.name}</h2>
        <p>{props.title}</p>
        <p>{props.description}</p>
      </div>
      <Button children="Follow me" />
      <Button children="Contact me" />
    </section>
  );
};

export default Card;
