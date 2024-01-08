import React, { useState } from 'react';
import './TarotSelector.css';
import { motion } from 'framer-motion';

const TarotSelector = () => {
    

    

    return (
        <div>
            < motion.div
                className="box"
                initial={{ opacity: 0.5, y: 200 }
                }
                animate={{
                    opacity: 1, y: 0
                }}
                transition={{
                    duration: 0.7,
                    delay: 0.8,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            >
            <div id="space">

                <div className="stars"></div>
                <div className="stars"></div>
                <div className="stars"></div>
                <div className="stars"></div>
                <div className="stars"></div>
                <div className="stars"></div>
                <div className="stars"></div>
                <div className="stars"></div>
                <div className="stars"></div>

            </div>
                </motion.div>
        </div>
    
    );

}

export default TarotSelector;

/*<button className="d-flex justify-content-center btn" onClick={toggleTarotSelector} >Show me my reading</button>
            {showTarotSelector && (
                <div id="space">

                    <div className="stars"></div>
                    <div className="stars"></div>
                    <div className="stars"></div>
                    <div className="stars"></div>
                    <div className="stars"></div>
                    <div className="stars"></div>
                    <div className="stars"></div>
                    <div className="stars"></div>
                    <div className="stars"></div>

                </div>)}*/ 