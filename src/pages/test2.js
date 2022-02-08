import React, {useState } from "react";
import { PortfolioData } from "../data/portfolioData";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/scss/navigation";
import "swiper/scss/thumbs";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

const Test2 = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [imageStore] = useState(PortfolioData);

  return (
    <main className="test  bgport">
      <div className="gridcase">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          slidesPerView={2}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {imageStore.map((image) => (
            <SwiperSlide>
              <img src={image.img} key={image.id} alt=" " />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {imageStore.map((image) => (
            <SwiperSlide>
              <img src={image.img} key={image.id} alt=" " />
            </SwiperSlide>
          ))}
      </Swiper>
      </div>
     </main>
  );
};

export default Test2;
