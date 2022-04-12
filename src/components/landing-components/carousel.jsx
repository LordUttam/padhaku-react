import React from "react";
import { useState, useEffect } from "react";
import "styles/carousel.css";
import { carousel1, carousel2, carousel3 } from "data/carousel";

function CarouselSlide(props) {
  const carouselImg = props.carouselImg;
  return (
    <li className="carousel__slide">
      <a href="./pages/products.html">
        <img src={carouselImg} alt="Sale poster" className="carousel__image" />
      </a>
    </li>
  );
}

function CarouselTrack({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <>
      <button
        className="carousel__button carousel__button--prev"
        onClick={() => {
          updateIndex(activeIndex - 1);
        }}
      >
        &#10094;
      </button>

      <ul
        className="carousel__track"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {children}
      </ul>

      <button
        className="carousel__button carousel__button--next"
        onClick={() => {
          updateIndex(activeIndex + 1);
        }}
      >
        &#10095;
      </button>
    </>
  );
}

function Carousel() {
  return (
    <section className="carousel">
      <CarouselTrack>
        <CarouselSlide carouselImg={carousel1} />
        <CarouselSlide carouselImg={carousel2} />
        <CarouselSlide carouselImg={carousel3} />
      </CarouselTrack>
    </section>
  );
}

export { Carousel, CarouselSlide, CarouselTrack };
