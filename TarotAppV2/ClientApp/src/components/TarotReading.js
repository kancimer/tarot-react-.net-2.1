import React, { useState, useRef } from 'react';
import TarotCard from './TarotCard';
import '../custom.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from "framer-motion";
import './TarotReading.css'; 
//import SpreadCardStack from './SpreadCardStack';
//import CardFlip from './CardFlip';
import { Button, Row, Col } from 'reactstrap';

import StarryBackground from './StarryBackground';
import CardsSlide from './CardsSlide';

const TarotReading = () => {
    const [data, setData] = useState(null);
    const [isReadingOnDisplay, setIsReadingOnDisplay] = useState(false);
    const [numOfCards, setNumOfCards] = useState(1);
    const [animateBackground, setAnimateBackground] = useState(false);
    const scrollRef = useRef(null);
    


    const styleAnimation = ` ${isReadingOnDisplay ? 'display-reading' : 'dont-display'}`;
    const pickedCards = (num) => {
        setNumOfCards(num);
        
    };
    let starryBackground = (<StarryBackground
            densityRatio={0.75} // Set default values or customize as needed
            sizeLimit={10}
            scaleLimit={15}
            proximityRatio={0.2}
            isAnimationActive={animateBackground}
            className="backgroundSetting"
        />
   );
    function readingRequested() {
        setAnimateBackground(true);
        //setData(null);
        setTimeout(() => {
            setAnimateBackground(false);
            getData();
        }, "2500");
        
    }

    function getData() {
        
            fetch(`api/${numOfCards}`)
                .then((results) => {
                    
                    return results.json();
                    
                })
                .then(res => {
                    
                    setData(JSON.parse(JSON.stringify(res)));
                    
                    localStorage.setItem("reading", JSON.stringify(res));
                    console.log(JSON.stringify(res));
                   
                });

    }

   
    return (
        <div>
            {starryBackground} 
            {/*isReadingOnDisplay && <TarotSelector/>*/}
            <div className="container">
            < motion.div
                
                initial={{ opacity: 0.5, y: 400 }
                }
                animate={{
                    opacity: 1, y:100}}
                transition={{
                    duration: 0.7,
                    delay: 0.8,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            ><Row>




                        <Col className="d-flex justify-content-center flex-column align-items-center" > <h1 >Simple Tarot App</h1> </Col>

                </Row>
                
            </motion.div>
           </div>
            < motion.div
                className="box"
                initial={{ opacity:0, y: 500 }
                }
                animate={{ y: 250, opacity: 1 }}
                transition={{
                    duration: 0.7,
                    delay: 1.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            ><Row className="justify-content-center">
                    <Col xs="12" className="d-flex justify-content-center">
                        {isReadingOnDisplay ? (<div><button className="btn" onClick={() => { setIsReadingOnDisplay(!isReadingOnDisplay); }}> Back
                        </button> </div>) : (<div><button className="btn" onClick={() => { setData(null); console.log(data); readingRequested(); setIsReadingOnDisplay(!isReadingOnDisplay); }}>
                       Get my reading
                        </button></div>)}
                        {data && isReadingOnDisplay ? (<div className="row justify-content-md-center" ref={scrollRef}> <CardsSlide /> <TarotCard ref={scrollRef}  className={styleAnimation } cards={data} /> </div>) : (<div ref={scrollRef}></div>)}
                </Col>
                </Row></motion.div>
    </div>

      );

};
export default TarotReading;

{/* 
            
            
             <div>
        
            < motion.div
                className="box"
                initial={{ opacity: 0.5, y: 200 }
                }
                animate={{ opacity: 1, y: 65 }}
                transition={{
                    duration: 0.7,
                    delay: 0.8,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            ><h1 className="d-flex justify-content-center">Simple Tarot App</h1></motion.div>

           

            <TarotSelector />
            <div className="d-flex justify-content-center flex-column align-items-center">
                <motion.div
                    className="box"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 50 }}
                    transition={{
                        duration: 0.5,
                        delay: 1.7,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    <p className="text-center mb-4">
                        Start your tarot journey by choosing a reading
                    </p>
                </motion.div>

                <Row className="justify-content-center">
                    <Col xs="12" className="d-flex justify-content-center">
                        <button className="btn" onClick={() => { console.log("Pressed btn!"); }}>
                            Let's start
                        </button>
                    </Col>
                </Row>
            </div>
           
        
            </div>*/}

{/*
    loading screem:

     < motion.div
                className="box"
                initial={{ opacity: 0.5, y: 200 }
                }
                animate={{ opacity: 1, y: 65 }}
                transition={{
                    duration: 0.7,
                    delay: 0.8,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            ><Row >




                    <Col className="row justify-content-center" ><h1 className="d-flex justify-content-center">Simple Tarot App</h1> </Col>

                </Row></motion.div>
    
*/ }