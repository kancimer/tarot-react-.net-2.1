import React, { useState } from 'react';
import TarotCard from './TarotCard';
import '../custom.css';

import { motion } from "framer-motion";
import './TarotReading.css'; 

import { Row, Col } from 'reactstrap';

import StarryBackground from './StarryBackground';
import CardsSlide from './CardsSlide';

const TarotReading = () => {
    const [data, setData] = useState(null);
    const [cardsDisplayed, setCardsDisplayed] = useState(false);
    const [isReadingRequested, setIsReadingRequested] = useState(false);
    const [numOfCards, setNumOfCards] = useState(1);
    const [animateBackground, setAnimateBackground] = useState(false);
    
    const [isCardClicked, setIsCardClicked] = useState(false);

    const updateIsCardClicked = (value) => {
        setIsCardClicked(value);
        
        getData();
        setTimeout(() => {
            scrollToCard();
        }, 500);
        //console.log("clicked!");
       
    };
    //const styleAnimation = ` ${isCardClicked ? 'display-reading' : 'dont-display'}`;
    //const styleAnimation = `'dont-display'`;
   
    let starryBackground = (<StarryBackground
            densityRatio={0.75} // Set default values or customize as needed
            sizeLimit={10}
            scaleLimit={15}
            proximityRatio={0.2}
            isAnimationActive={animateBackground}
            className="backgroundSetting"
        />
    );
    /*const scrollToCard = () => {
        let card = document.getElementById('tarot-card');
        card.scrollIntoView();
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    }*/
    const scrollToCard = () => {
        // If the TarotCard has an ID, use it; otherwise, replace 'tarot-card' with the appropriate ID
        const card = document.getElementById('tarot-card-btn') || document.querySelector('.cardslide');

        if (card) {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };
    function readingRequested() {
        setData(null);
        setIsReadingRequested(true);
        //setIsCardClicked(false);
        setAnimateBackground(true);
        //setData(null);
        setTimeout(() => {
            setAnimateBackground(false);
            setCardsDisplayed(true);
            //getData();
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


                        <Col className="d-flex justify-content-center flex-column align-items-center" > <h1>Simple Tarot App</h1> </Col>

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
                        {isReadingRequested ? (<div>
                            
                        </div>) : (<div>
                            <button className="btn" onClick={() => {  console.log(data); readingRequested(); 
                                 }}>
                       Get my reading
                        </button> </div>)}
                    </Col>
                </Row></motion.div>
            <div className="justify-content-center">
                {cardsDisplayed ? (<div className="justify-content-md-center">
                    <div style={{ position: 'relative', marginTop: '10%' }}>
                        {!data && <CardsSlide className="backgroundSetting cardslide" clickCard={updateIsCardClicked} />}</div>
                    {data && <div>< TarotCard id="tarot-card" style={{ display: "none" }} cards={data} />
                        < motion.div
                            className="box"
                            initial={{ opacity: 0 }
                            }
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 0,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                        > <Row className="justify-content-center" id="tarot-card-btn" >
                                <Col xs="12" className="d-flex justify-content-center"><button className="btn" onClick={() => {
                                    setData(null); getData(); setTimeout(() => {
                                        scrollToCard();
                                    }, 500);
                        }}>
                            Another reading
                        </button>
                                    <button className="text-left btn" onClick={() => {
                            setData(null); setCardsDisplayed(false); setIsCardClicked(false); setIsReadingRequested(false);
                        }}>
                            Back
                                </button></Col>
                            </Row></motion.div>
                    </div>}</div>) : (<div></div>)}
                
         
                </div>  
    </div>

      );

};
export default TarotReading;

{ /*import React, { useState, useRef } from 'react';
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
    const [isCardClicked, setIsCardClicked] = useState(false);

    const updateIsCardClicked = (value) => {
        setIsCardClicked(value);
        //console.log("clicked!");
        let card = document.getElementById('tarot-card');
    };
    //const styleAnimation = ` ${isCardClicked ? 'display-reading' : 'dont-display'}`;
    //const styleAnimation = `'dont-display'`;
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
        setIsCardClicked(false);
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
                        {isReadingOnDisplay ? (<div>
                            <button className="btn" onClick={() => { setIsReadingOnDisplay(!isReadingOnDisplay); }}> Back
                            </button>
                        </div>) : (<div>
                            <button className="btn" onClick={() => { setData(null); console.log(data); readingRequested(); 
                                setIsReadingOnDisplay(!isReadingOnDisplay); }}>
                       Get my reading
                        </button> </div>)}
                    </Col>
                </Row></motion.div>
            <Row className="justify-content-center">
                <Col xs="12" className="d-flex justify-content-center">{data && isReadingOnDisplay ? (<div className="justify-content-md-center">
                    <CardsSlide clickCard={updateIsCardClicked} /> <TarotCard id="tarot-card" style={{ display: "none" }} cards={data} /> </div>) : (<div></div>)}
                
         </Col>
                </Row>  
    </div >

      );

};
export default TarotReading;
*/}