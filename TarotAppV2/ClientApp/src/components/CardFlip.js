import React from 'react';
import './CardFlip.scss';

const CardFlip = () => {
    const handleCardClick = (event) => {
        event.currentTarget.classList.toggle('flipped');
    };

    return (
        <div>
            <article className="board">
                <button className="card" onClick={handleCardClick}>
                    <span className="wrapper">
                        <span className="content">
                            <span className="face back"></span>
                            <span className="face front"></span>
                        </span>
                    </span>
                </button>
                <button className="card" onClick={handleCardClick}>
                    <span className="wrapper">
                        <span className="content">
                            <span className="face back"></span>
                            <span className="face front"></span>
                        </span>
                    </span>
                </button>
                <button className="card" onClick={handleCardClick}>
                    <span className="wrapper">
                        <span className="content">
                            <span className="face back"></span>
                            <span className="face front"></span>
                        </span>
                    </span>
                </button>
            </article>
        </div>
    );
};

export default CardFlip;
