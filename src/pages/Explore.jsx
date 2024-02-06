import Intro from "../components/IntroHome";
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import Carousel from "../components/Carousel";

function Explore() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <Intro />
      <Carousel />
    </div>
  );
}

export default Explore;

