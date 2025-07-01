import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Trainersdata.css";

const TrainerCarousel = ({ trainers }) => {
  return (
    <div className="carousel-container">
      <Carousel showThumbs={false} infiniteLoop autoPlay>
        {trainers.map((trainer, index) => (
          <div key={index} className="trainer-slide">
            <img
              src={trainer.src}
              alt={trainer.name}
              className="trainer-image"
            />
            <div className="trainer-info">
              <h3>{trainer.name}</h3>
              <p>{trainer.designation}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TrainerCarousel;
