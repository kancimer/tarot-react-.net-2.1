import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
//import * as dat from 'dat.gui';
import './StarryBackground.css';
const StarryBackground = ({
    densityRatio = 1.7,
    sizeLimit = 2,
    defaultAlpha = 0.1,
    scaleLimit = 1,
    proximityRatio = 0.27,
    isAnimationActive = false,
}) => {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const starsRef = useRef(null);
    const vminRef = useRef(null);
    const scaleMapperRef = useRef(null);
    const alphaMapperRef = useRef(null);

    const styleAnimation = `star-field ${isAnimationActive ? 'animate' : ''}`;
    const styleAnimationCanvas = isAnimationActive ? 'animate-canvas' : 'canvas-style';

    useEffect(() => {
        contextRef.current = canvasRef.current.getContext('2d');
       
        const LOAD = () => {
            vminRef.current = Math.min(window.innerHeight, window.innerWidth);
            const STAR_COUNT = Math.floor(vminRef.current * densityRatio);
            scaleMapperRef.current = gsap.utils.mapRange(0, vminRef.current * proximityRatio, scaleLimit, 1);
            alphaMapperRef.current = gsap.utils.mapRange(0, vminRef.current * proximityRatio, 1, defaultAlpha);
            canvasRef.current.width = window.innerWidth;
            canvasRef.current.height = window.innerHeight;
            starsRef.current = new Array(STAR_COUNT).fill().map(() => ({
                x: gsap.utils.random(0, window.innerWidth, 1),
                y: gsap.utils.random(0, window.innerHeight, 1),
                size: gsap.utils.random(1, sizeLimit, 1), //ide od 0.002 do sizeLimit po inkrementima od 1
                scale: 1,
                alpha: defaultAlpha,
            }));
        };

        const RENDER = () => {
            contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            starsRef.current.forEach(star => {
                contextRef.current.fillStyle = `hsla(225, 62%, 43%)`;//hsla(0, 100%, 100%)
                contextRef.current.beginPath();
                contextRef.current.arc(star.x, star.y, (star.size / 10) * star.scale, 0, Math.PI * 2);//prije bilo 2 ne 10
                //contextRef.current.style.boxShadow = `10px 10px lightblue`;
                //canvasRef.current.classList.add('glow');
                contextRef.current.fill();
                //console.log('Rendered');
            });
        };

        const UPDATE = ({ x, y }) => {
            starsRef.current.forEach(STAR => {
                const DISTANCE = Math.sqrt(Math.pow(STAR.x - x, 2) + Math.pow(STAR.y - y, 2));
                gsap.to(STAR, {
                    scale: scaleMapperRef.current(Math.min(DISTANCE, vminRef.current * proximityRatio)),
                    alpha: alphaMapperRef.current(Math.min(DISTANCE, vminRef.current * proximityRatio)),
                });
            });
            starsRef.current.forEach(STAR => {
                gsap.to(STAR, {
                    duration: 3,
                    boxShadow: '10px 10px 5px white',
                    repeat: -1
                });
            });
        };

        LOAD();
        gsap.ticker.fps(24);
        gsap.ticker.add(RENDER);

        // Set up event handling
        window.addEventListener('resize', LOAD);
        document.addEventListener('pointermove', UPDATE);

        return () => {
            window.removeEventListener('resize', LOAD);
            document.removeEventListener('pointermove', UPDATE);
            gsap.ticker.remove(RENDER);
        };
    }, [scaleLimit, sizeLimit, densityRatio, proximityRatio, defaultAlpha, isAnimationActive]);

    return (

        <div className="bg">
            <canvas
                ref={canvasRef}
                className={styleAnimationCanvas}
            />
            <div className={styleAnimation}>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
            </div>   </div>
    );
};

export default StarryBackground;

/*
    
    
    {!isAnimationActive ? <p>Ne animira se</p> : <p>Animacijaaa!</p>}
    
    
    className="canvas-style"*/