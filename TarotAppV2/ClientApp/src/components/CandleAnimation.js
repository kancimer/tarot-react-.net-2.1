import React from 'react';
//import { motion } from "framer-motion";
import './CandleAnimation.scss';
const CandleAnimation = () => {
    return (
        <div>
        <div className="candle">
            <div className="flame">
                <div className="shadows"></div>
                <div className="top"></div>
                <div className="middle"></div>
                <div className="bottom"></div>
            </div>
            <div className="wick"></div>
            <div className="wax"></div>
            </div>
        
        </div>
    );
}

export default CandleAnimation;