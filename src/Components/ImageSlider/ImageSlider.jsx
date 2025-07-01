// src/ImageSlider.js

import React, { useState } from "react";
import "./ImageSlider.css";


const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <>
      {/* <Header /> */}
      <div className="Image_slider">
        <button onClick={prevSlide} className="Image_left-arrow">
          &#10094;
        </button>
        <div className="Image_slider-content">
          {slides?.map((slide, index) => (
            <div
              className={index === currentIndex ? "Image_slide active" : "Image_slide"}
              key={index}
            >
              {index === currentIndex && (
                <>
                  <img style={{ width: '100%' }} src={slide.image} alt={`Slide ${index}`} />
                  <div className="Image_text">{slide.text}</div>
                </>
              )}
            </div>
          ))}
        </div>
        <button onClick={nextSlide} className="Image_right-arrow">
          &#10095;
        </button>
      </div>
    </>

  );
};

export default ImageSlider;
