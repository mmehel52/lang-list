import "./Card.css";
import React from "react";
import { useState } from "react";

const Card = (languages) => {
  const [clicked, setClicked] = useState(true);

  const selectSide = (clicked, languages) => {
    if (clicked) {
      return (
        <div className="front">
          <img src={languages.img} alt="img" />
          <p>{languages.name}</p>
        </div>
      );
    } else {
      return (
        <div className="back">
          <ul>
            <li>{languages.options[0]}</li>
            <li>{languages.options[1]}</li>
            <li>{languages.options[2]}</li>
          </ul>
        </div>
      );
    }
  };

  return (
    <div className="cards" onClick={() => setClicked((item) => !item)}>
      {selectSide(clicked, languages)}
    </div>
  );
};

export default Card;
