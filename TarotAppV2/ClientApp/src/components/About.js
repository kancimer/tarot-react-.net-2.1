import React from 'react';
import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.5, x: 500 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
                duration: 0.5,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        >
        <div className="row justify-content-md-center">
        <div className="col col-lg-6 ">
        <p   style={{marginTop: '10em'}}>A simple Tarot reading web application for educational and entertainment purposes using React + .NET 6.0.</p>
        
        <p>Mentor dr.sc. Maja Turčić</p>
            <p>Kristina Ančimer, 2023</p>
        </div>
            </div>
            </motion.div>            );
}

export default About;