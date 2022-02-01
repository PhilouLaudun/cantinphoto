import React, { useState } from 'react';
import {PriceData} from '../data/priceData'

const Carte = (props) => {
  const [currentCard] = useState(PriceData);
  const carte=currentCard[props.carteNumber]
    



  return (
    <div className="card">
      <h1>{carte.title} </h1>
      <p>{carte.prix}</p>
      <p>{carte.infos}</p>
      <img src={carte.img} alt={carte.title} />
    </div>
  ); 
};

export default Carte;
