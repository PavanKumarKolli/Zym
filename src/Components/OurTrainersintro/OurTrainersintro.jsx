import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import StarRatingComponent from 'react-rating-stars-component';
import './OurTrainersintro.css';

const testimonialsData = [
  {
    name: 'John Doe',
    feedback1: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    feedback2: "Commodi ipsam, ab itaque nam",
    feedback3: "perferendis impedit sint",
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    name: 'Jane Smith',
    feedback1: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    feedback2: "Commodi ipsam, ab itaque nam",
    feedback3: "perferendis impedit sint",
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    name: 'Sam Wilson',
    feedback1: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    feedback2: "Commodi ipsam, ab itaque nam",
    feedback3: "perferendis impedit sint",
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/3.jpg'
  }
];

export const OurTrainersintro = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inTransition, setInTransition] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextTestimonial = () => {
    setInTransition(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
      setInTransition(false);
    }, 500);
  };

  const prevTestimonial = () => {
    setInTransition(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
      setInTransition(false);
    }, 500);
  };

  return (
    <div className="trainersIntro-container">
      <span style={{ color: "#F36100" }}>TESTIMONIAL</span>
      <h2>OUR CLIENT SAY</h2>
      <div className="trainersIntro-wrapper">
        <MdKeyboardArrowLeft onClick={prevTestimonial} className="trainersIntro-nav-arrow trainersIntro-left-arrow" />
        <div className={`trainersIntro ${inTransition ? 'trainersIntro-fade' : ''}`}>
          <img src={testimonialsData[currentIndex].image} alt={testimonialsData[currentIndex].name} className="trainersIntro-image" />
          <div className="trainersIntro-content">
            <h3 style={{color:"#f36100"}}>{testimonialsData[currentIndex].name}</h3>
            <p>"{testimonialsData[currentIndex].feedback1}"</p>
            <p>"{testimonialsData[currentIndex].feedback2}"</p>
            <p>"{testimonialsData[currentIndex].feedback3}"</p>
            <StarRatingComponent
              name="rating"
              starCount={5}
              value={testimonialsData[currentIndex].rating}
              editing={true}
              className="trainersIntro-rating"
            />
          </div>
        </div>
        <MdKeyboardArrowRight onClick={nextTestimonial} className="trainersIntro-nav-arrow trainersIntro-right-arrow" />
      </div>
    </div>
  );
};

export default OurTrainersintro;
