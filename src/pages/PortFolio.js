import React, { useState, useEffect } from "react";
import { PortfolioData } from "../data/portfolioData";
import Logo from "../componants/Logo";
import Navigations from "../componants/Navigations";
import SocialNetworks from "../componants/SocialNetworks";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/scss/navigation";
import "swiper/scss/thumbs";
// import required modules
import { Controller, FreeMode, Navigation, Thumbs } from "swiper";

const PortFolio = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [imageStore] = useState(PortfolioData);
  const [sortedArray, setSortedArray] = useState(PortfolioData);
  const [selectTri, setSelectTri] = useState("Tout");
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [slideViewOne, setslideViewOne] = useState(2);
  const [slideViewTwo, setslideViewTwo] = useState(5);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const tri = [
    "Tout",
    "Portrait",
    "Couple",
    "Famille",
    "Grossesse",
    "Bébé",
    "Mariage",
  ];

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log ("hello")
    filterArray(imageStore);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectTri,windowDimensions.width]);

  function handleResize() {
    setWindowDimensions(getWindowDimensions());
    if (windowDimensions.width < 1024) {
      setslideViewOne(1);
      setslideViewTwo(3);
      console.log(slideViewOne, slideViewTwo);
    } else {
      setslideViewOne(2);
      setslideViewTwo(5);
    }
  }
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    console.log("getdimension", width);
    return {
      width,
      height,
    };
  }
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };
  const filterArray = (array) => {
    if (selectTri === "Tout") {
      setSortedArray(array);
    } else {
      setSortedArray(array.filter((tri) => tri.cat.includes(selectTri)));
    }
    shuffleArray(array);
  };

  return (
    <main>
      <div className="portfolio  bgport">
        <Navigations />
        
        <SocialNetworks />

        <div className="gridcase">
          <Logo />
          <div className="choice">
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
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            slidesPerView={slideViewOne}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {sortedArray.map((image) => (
              <SwiperSlide>
                <img src={image.img} key={image.id} alt=" " />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            //loop={true}
            spaceBetween={10}
            slidesPerView={slideViewTwo}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
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
