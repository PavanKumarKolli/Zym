import "./Testimonials.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";
import { useState } from "react";
import { testimonialsData } from "../Data/Testimonialsdata";

export const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tlength = testimonialsData.length;
  const transition = { type: "spring", duration: 3 };

  return (
    <div className="testimonials-card">
      <div className="trainers_min_container"></div>
      <div className="test-container">
        <div className="test-left">
          <h1 className="stroke-text">About Trainer</h1>
          <motion.span
            key={selected}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={transition}
          >
            {testimonialsData[selected].review}
          </motion.span>
          <div>
            <span>Name: </span>
            <span>{testimonialsData[selected].name}</span>
          </div>
        </div>
        <div className="test-right">
          <div className="ouline_div"></div>
          <div className="eleveted__div"></div>
          <motion.img
            key={selected}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={transition}
            src={testimonialsData[selected].image}
            alt=""
          />
          <div className="arrow-card">
            <AiOutlineArrowLeft
              size={25}
              onClick={() => {
                setSelected((prev) => (prev === 0 ? tlength - 1 : prev - 1));
              }}
            />
            <AiOutlineArrowRight
              size={25}
              onClick={() => {
                setSelected((prev) => (prev === tlength - 1 ? 0 : prev + 1));
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
