import React from "react";
import "./FitnessBanner.css";
import { motion } from "framer-motion";

const FitnessBanner = () => {
    return (
        <div className="fitness-banner">
            <motion.div
                className="fitness-content"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <h1>BUILD YOUR BODY <br />TRANSFORM YOUR LIFE</h1>
                <p>Join the best fitness community and achieve your dream physique with expert trainers and modern equipment.</p>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="join-btn"
                >
                    Join Now
                </motion.button>
            </motion.div>

            <motion.div
                className="fitness-image"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <img src="https://imgscf.slidemembers.com/docs/1/1/281/gym_and_fitness_powerpoint_templates_for_presentation_280217.jpg" alt="Fitness" />
            </motion.div>
        </div>
    );
};

export default FitnessBanner;
