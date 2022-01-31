import React, { useState } from 'react';
import {PriceData} from '../data/priceData'

const Carte = (props) => {
  const [currentCard] = useState(PriceData);
  const carte=currentCard[props.carteNumber]
    



  return (
    <div>
      <h1>{carte.title} </h1>
        <p>{carte.date}</p>



    </div>
  ); 
};

export default Carte;
