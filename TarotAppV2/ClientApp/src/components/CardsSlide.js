import React, { useEffect, useRef } from 'react';
import gsap, { Power2 } from 'gsap';
import './CardsSlide.css';

//const symbols = ["♣", "♠", "♥", "♦"];

const CardsSlide = () => {
    const tableRef = useRef(null);
    let cardWidth = 100,
        cardHeight = 150,
        cardCount = 1,
        startingHands = 0;

    useEffect(() => {
        const table = tableRef.current;

        const start = () => {
            if (startingHands < 3) {
                startingHands++;
                draw();
                setTimeout(start, 1000);
            }
        };
/*
        const bindEvents = () => {
            window.addEventListener('click', () => {
                draw();
            });
        };
        */
        const draw = () => {
            let tl = gsap.timeline(),
                position = getTableCenter(),
                card = addCard();

            cardCount++;

            gsap.set(card, {
                y: -table.offsetHeight,
                x: table.offsetWidth / 2,
                zIndex: cardCount,
            });

            let offsetX = table.offsetWidth * 0.5,
                offsetY = table.offsetHeight * 0.5;

            tl.addLabel('start')
                .to(card, {
                    duration: 1.5,
                    ease: Power2.easeOut,
                    x: position.x + getRandom(-offsetX, offsetX),
                    y: position.y + getRandom(-offsetY, offsetY),
                }, 'start')
                .to(card, {
                    duration: 1.4,
                    ease: Power2.easeOut,
                    rotation: getRandom(360),
                }, 'start');
        };

       const addCard = () => {
            let card = document.createElement('div');
            card.className = 'card';
            //let span = document.createElement('span');
            //span.className = 'card__symbol' + (Math.random() >= 0.5 ? ' card__symbol--red' : '');
           //span.className = 'card';
            //span.appendChild(document.createTextNode(getRandomSymbol()));
            //card.appendChild(span);
           table.appendChild(card);

           card.addEventListener('click', () => {
               table.removeChild(card);
               //clickCard(true);
           });

            return card;
        };

        

        /*const getRandomSymbol = () => {
            return symbols[Math.floor(Math.random() * symbols.length)];
        };*/

        const getTableCenter = () => {
            return {
                x: (table.offsetLeft + table.offsetWidth / 2) - (cardWidth / 2),
                y: (table.offsetTop + table.offsetHeight / 2) - (cardHeight / 2),
            };
        };

        const getRandom = (min, max = null) => {
            let realMax = (max === null ? min * 2 : max);
            return min + Math.random() * (realMax - min);
        };

        //bindEvents();
        start();
    }, []);

    return (
        <div id="frame">
            <p>Click on a card to see what the future holds!</p>
            <div id="table" ref={tableRef}>
                
            </div>
        </div>
    );
};

export default CardsSlide;

        /**<div className="card card--sample">
                    <span className="card__symbol card__symbol--heart">♣</span>
                </div> */