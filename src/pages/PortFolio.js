import React, { useState, useEffect } from "react";
import { PortfolioData } from "../data/portfolioData";
import Logo from "../componants/Logo";
import Navigations from "../componants/Navigations";
import SocialNetworks from "../componants/SocialNetworks";

// Import Swiper React components et Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/scss/navigation";
import "swiper/scss/thumbs";
import { Controller, FreeMode, Navigation, Thumbs } from "swiper";

// composant portfolio
const PortFolio = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null); // variable pour le focntionnement de Swiper
  const [imageStore] = useState(PortfolioData); // tableau contenant la liste des images
  const [sortedArray, setSortedArray] = useState(PortfolioData); //tableau trié pour l'affichage des images dans swiper
  const [selectTri, setSelectTri] = useState("Tout"); // variable contenant l'index du bouton radio selectionné
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  ); // variable contenant les dimensions du viewport actuel
  const [slideViewOne, setslideViewOne] = useState(1); // variable contenant le nombre de photos à afficher dans le slide principal
  const [slideViewTwo, setslideViewTwo] = useState(3);// variable contenant le nombre de photos à afficher dans le slide secondaire
  const tri = [
    "Tout",
    "Portrait",
    "Couple",
    "Famille",
    "Grossesse",
    "Bébé",
    "Mariage",
  ];// tableau contenant les options de tri 
  // premier useeffect en cas de redimensionnement de l'écran pour afficher le nombre de photos correct en focntion de la largeur de l'écran
  useEffect(() => {
    handleResize() // déclenche la recherche des dimensions au chargement de la page
    // ajoute un évenement lors du redimensionnement en largeur de la page
    window.addEventListener("resize", handleResize); 
    return () => window.removeEventListener('resize', handleResize);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowDimensions.width]);
  // deuxième useeffect en cas de changement de l'ordre du tri
  useEffect(() => {
    filterArray(imageStore); // appelle la focntion pour tier les photos de manière aléatoire
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectTri]);

  // focntion définissant le nombre de photos en fonction de la largeur de l'écran
  function handleResize() {
    setWindowDimensions(getWindowDimensions());
    if (windowDimensions.width < 1024) {
      setslideViewOne(1);
      setslideViewTwo(3);
    } else {
      setslideViewOne(2);
      setslideViewTwo(5);
    }
  }
  // fonction recherchant les dimensions de l'écran
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  //fonction triant les photos dans un ordre aléatoire pour l'affichage
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };
  //fonction permettant d'afficher les photos en fonction de leur catégorie (soit toutes soit catégorie choisie dans la barre de tri)
  const filterArray = (array) => {
    if (selectTri === "Tout") {
      setSortedArray(array); // le tableau d'affichage est égal à l'ensemble du tableau des images
    } else {
      setSortedArray(array.filter((tri) => tri.cat.includes(selectTri)));// le tableau d'affichage ne conteint que les images de la categorie choisie
    }
    shuffleArray(array);// tri le tableau d'affichage de manière aléatoire
  };
  
  return (
    <main>
      {/*page principale */}
      <div className="portfolio  bgport">
        {/*composants : navigation, réseaux sociaux*/}
        <Navigations />
        <SocialNetworks />
        {/*Contenu de la page en mode grid */}
        <div className="gridcase">
          {/*logo intégré dans la grille */}
          <Logo />
          {/*Barre de tri */}
          <div className="choice">
            {/*Affichage des choix par interrogation fichier externe json */}
            <ul>
              {tri.map((tri) => {
                return (
                  <li key={tri}>
                    <input
                      type="radio"
                      value={tri}
                      id={tri}
                      checked={tri === selectTri}
                      onChange={(e) => setSelectTri(e.target.value)}
                    />
                    <label htmlFor={tri}>{tri}</label>
                  </li>
                );
              })}
            </ul>
          </div>
          {/*Affichage du slide principal */}
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            slidesPerView={slideViewOne} // permet de l'affichage du nombre de photos en mode responsive (1 ou 2)
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {/*Affichage des images à partir du fichier externe en json */}
            {sortedArray.map((image) => (
              <SwiperSlide>
                <img src={image.img} key={image.id} alt=" " />
              </SwiperSlide>
            ))}
          </Swiper>
          {/*Affichage du slide secondaire */}
          <Swiper
            onSwiper={setThumbsSwiper}
            //loop={true}
            spaceBetween={10}
            slidesPerView={slideViewTwo} // permet de l'affichage du nombre de photos en mode responsive (3 ou 5)
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {/*Affichage des images à partir du fichier externe en json */}
            {sortedArray.map((image) => (
              <SwiperSlide>
                <img src={image.img} key={image.id} alt=" " />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </main>
  );
};

export default PortFolio;
