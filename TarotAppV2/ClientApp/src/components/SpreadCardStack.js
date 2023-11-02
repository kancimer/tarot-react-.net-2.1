import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './SpreadCardStack.css'; // Create a custom CSS file
import { motion } from 'framer-motion';

const SpreadCardStack = ({ pickedCards }) => {
    const cardCount = 20; // Number of cards to overlap
    const initialSelectedCards = Array(cardCount).fill(false);
    const [selectedCards, setSelectedCards] = useState(initialSelectedCards);

    const handleCardClick = (cardIndex) => {
        setSelectedCards((prevSelectedCards) => {
            const updatedSelectedCards = [...prevSelectedCards];
            updatedSelectedCards[cardIndex] = !updatedSelectedCards[cardIndex];
            return updatedSelectedCards;
        });
    };

    useEffect(() => {
        // Calculate the count of selected cards
        const selectedCount = selectedCards.filter(Boolean).length;
        pickedCards(selectedCount);
    }, [selectedCards, pickedCards]);

    return (
        <div className=" col col-lg-12 backOfCard-container">
            {[...Array(cardCount)].map((_, index) => (
                <motion.div
                    className="backOfCardMotion"
                    initial={{ opacity: 0, scale: 1, x: -500 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{
                        duration: 0.3,
                        delay: 0.1 * index,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <div
                        key={index + 1}
                        className={`backOfCard backOfCard-${index + 1} ${selectedCards[index] ? 'moved' : ''
                            }`}
                        onClick={() => handleCardClick(index)}
                    >
                        <div className="backOfCard-body"></div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default SpreadCardStack;
