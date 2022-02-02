import React, { useState } from "react";
import { PriceData } from "../data/priceData";

const Carte = (props) => {
  const [currentCard] = useState(PriceData);
  const carte = currentCard[props.carteNumber];


  return (
    <div className="card">
      <img src={carte.img} alt={carte.title} />
      <h1>{carte.title} </h1>
      <div className="card-text">
        <h3>
          <div>{carte.infos}</div>
        </h3>
        <h2>{carte.prix}</h2>
      </div>
    </div>
  );
};

export default Carte;
