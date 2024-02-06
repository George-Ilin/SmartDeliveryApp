import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { toast } from "react-toastify";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";

const CarouselWithAutoplay = () => {
  const [information, setInformation] = useState([]);
  useEffect(() => {
    async function getInfo() {
      try {
        const res = await axios.get("http://localhost:8000/info");
        return setInformation(res.data);
      } catch (error) {
        toast.error("Something is wrong");
      }
    }

    getInfo();
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="carousel-container">
      <h2 className="title-carousel-card"> De ce să alegi SmartDelivery </h2>
      <Slider {...settings}>
        {information.map((item, index) => {
          return (
            <div key={index}>
              <div className="carousel-card">
                <img className="carousel-img" src={item.img} />
                <p class="title-card-carousel">{item.title}</p>
                <p class="text-card-carousel">{item.text}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CarouselWithAutoplay;
