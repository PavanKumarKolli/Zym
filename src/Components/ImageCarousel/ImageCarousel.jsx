import React, { useState } from 'react';
import './ImageCarousel.css';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { TrainersData } from '../Data/Coursoual';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? TrainersData.length - 1 : prevIndex - 1));
  };
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === TrainersData.length - 1 ? 0 : prevIndex + 1));
  };
  const getClassName = (index) => {
    if (index === currentIndex) return 'slide active-slide';
    if (index === (currentIndex + 1) % TrainersData.length) return 'slide next-slide';
    if (index === (currentIndex - 1 + TrainersData.length) % TrainersData.length) return 'slide prev-slide';
    return 'slide';
  };
  return (
    <>
      <div  >
        <div className="trainers_min_container">
          <div className="trainers_heading_container">
            <div>
              <span style={{ color: "#f36100" }}>OUR TEAM</span>
              <h2 style={{ color: "#fff" }}>TRAIN WITH EXPERTS</h2>
            </div>
            <div>
              <button className="trainee_btn">APPOINTMENT</button>
            </div>
          </div>
        </div>
      </div>
      <div className="Image-slider-container">
        <button onClick={goToPrevious} className="Image_nav-button"><FaArrowLeft />
        </button>
        <div className="Image_slider">
          {TrainersData?.map((image, index) => (
            <div key={index} className={getClassName(index)}>
              <img src={image.url} alt={image.name} />
              <div className="Image_description">
                <span style={{ color: "#f36100" }}>{image.name}</span>
                <p>{image.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={goToNext} className="Image_nav-button"><FaArrowRight /></button>
      </div>
      </>
  );
};
export default ImageCarousel;
