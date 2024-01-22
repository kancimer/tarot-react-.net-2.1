import React, { useEffect, useRef } from 'react';
import gsap, { Power2 } from 'gsap';
import './CardsSlide.css';


const CardsSlide = (props) => {
    const tableRef = useRef(null);
    let cardWidth = 100,
        cardHeight = 150,

        startingHands = 0;

    useEffect(() => {

        const table = tableRef.current;
        const start = () => {
            if (startingHands < 5) {
                startingHands++;
                draw();
                setTimeout(start, 1000);
            }
        };

        const draw = () => {
            let tl = gsap.timeline(),
                position = getTableCenter(),
                card = addCard();



            gsap.set(card, {
                y: -table.offsetHeight,
                x: table.offsetWidth / 2,
                zIndex: 'auto',
            });

            let offsetY = table.offsetHeight * 0.5;

            tl.addLabel('start')
                .to(card, {
                    duration: 1.5,
                    ease: Power2.easeOut,
                    //malo promijeniti x
                    x: startingHands * 150,
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
            table.appendChild(card);

            card.addEventListener('click', () => {

                table.removeChild(card);
                props.clickCard(true);

                console.log('Cardslide clicked!');
            });

            return card;
        };





        const getTableCenter = () => {
            const centerY = (table.offsetTop + table.offsetHeight / 2) + cardHeight;//- (cardHeight / 2), matematicki ali bolje bez
            const centerX = (table.offsetLeft + table.offsetWidth / 2) - cardWidth;//dodala
            const variation = 10; // You can adjust this value for the desired y-axis variation
            const randomY = centerY + getRandom(-variation, variation);
            const randomX = centerX + getRandom(-2 * variation, -variation / 2);//dodala
            //console.log("x i y centra:",centerX, centerY);
            return {
                x: randomX,//(table.offsetLeft + table.offsetWidth / 2) - (cardWidth / 2),
                y: randomY,
            };
        };


        const getRandom = (min, max = null) => {
            let realMax = (max === null ? min * 2 : max);
            //let realMax = (max === null ? min * 2 : max);//unchanged
            let randomValue = min + Math.random() * (realMax - min);
            //return min + Math.random() * (realMax - min);
            // Ensure the card position is within the visible area of the table
            if (randomValue < 0) {
                return 0;
            } else if (randomValue > realMax) {
                return realMax;
            } else {
                return randomValue;
            }
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