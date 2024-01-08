import React, { useRef, useEffect, memo } from 'react';
import gsap from 'gsap';
import * as dat from 'dat.gui';
import './StarryBackground.css';
const StarryBackground = ({
    densityRatio = 1.7,
    sizeLimit = 0.05,
    defaultAlpha = 0.5,
    scaleLimit = 2.2,
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
    //const styleAnimationCanvas = `{isAnimationActive ? 'animate-canvas' : 'canvas-style'}`;
    const styleAnimationCanvas = isAnimationActive ? 'animate-canvas' : 'canvas-style';

    useEffect(() => {
        contextRef.current = canvasRef.current.getContext('2d');
        /*
        const starField = document.querySelector('.star-field');
        if (starField) {
            if (isAnimationActive) {
                starField.classList.add('animate');
            } else {
                starField.classList.remove('animate');
            }
        }
        */
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
                size: gsap.utils.random(0.02, sizeLimit, 1),
                scale: 1,
                alpha: defaultAlpha,
            }));
        };

        const RENDER = () => {
            contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            starsRef.current.forEach(star => {
                contextRef.current.fillStyle = `hsla(0, 100%, 100%)`;
                contextRef.current.beginPath();
                contextRef.current.arc(star.x, star.y, (star.size / 2) * star.scale, 0, Math.PI * 2);
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