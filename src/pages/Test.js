import React, { useState } from "react";
import ImagePortfolio from "../componants/ImagePortfolio";
import { PortfolioData } from "../data/portfolioData";

const Test = () => {
  const [imageStore] = useState(PortfolioData);
  const [sortedImage, setSortedImage] = useState([]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };
  // tri à effectuer si pas de demande de tri
  shuffleArray(imageStore);
  

  return (
    <div className="images">
      {imageStore.map((image) => (
        <ImagePortfolio className= "image" cat={image.cat} image={image.img} keys={image.id}></ImagePortfolio>
      ))}
    </div>
  );
};

export default Test;
