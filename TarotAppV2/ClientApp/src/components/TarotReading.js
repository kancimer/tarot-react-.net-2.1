import React, { useState, useRef } from 'react';
import TarotCard from './TarotCard';
import '../custom.css';

import { motion } from "framer-motion";
import './TarotReading.css'; 
import SpreadCardStack from './SpreadCardStack';
import { Button, Row, Col } from 'reactstrap';

const TarotReading = () => {
    const [data, setData] = useState(null);
    const [isReadingOnDisplay, setIsReadingOnDisplay] = useState(false);
    const [numOfCards, setNumOfCards] = useState(0);
    
    const scrollRef = useRef(null);
    const greeting = "Welcome to your Tarot reading! Click on a card to select and click again to deselect.";
    const pickedCards = (num) => {
        setNumOfCards(num);
        
    };
   
    
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
        <div  >
            
            <motion.div
                className="box"
                initial={{ opacity: 0, scale: 0.5, x:500}}
                animate={{ opacity: 1, scale: 1, x:0 }}
                transition={{
                    duration: 0.5,
                    delay: 0.1,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            >
                <p className="greeting">{greeting}</p> </motion.div>
            
                            <motion.div
                                className="box"
                                initial={{ opacity: 0, scale: 0.5}}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.3,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }}
                            >
                            <Row > 
                                
                           
                           
                        
                    <Col className="row justify-content-center" >
                        {!isReadingOnDisplay ? (<Button className="col col-lg-2 py-3 " onClick={() => {
                                        if (numOfCards > 0 && numOfCards < 20) {
                                            setTimeout(() => {
                                                setIsReadingOnDisplay(true);
                                                getData(); scrollRef.current.scrollIntoView({ behavior: 'smooth' });
                                            }, 50);
                                        } else {
                                            alert("Number of cards must be a positive integer!");
                                        }
                                    }} >
                                        Generate {numOfCards} Tarot cards

                                    </Button>) : ("")}
                                </Col>
                            
                                </Row></motion.div>
           
            {isReadingOnDisplay ? (<div class="row justify-content-md-center"><Button className="col col-lg-2 py-3 " onClick={() => { setIsReadingOnDisplay(false); }}>Another reading</Button></div>) : (<SpreadCardStack className="row justify-content-md-center" pickedCards={pickedCards} />)}
            {data && isReadingOnDisplay ? (<div class="row justify-content-md-center"  ref={scrollRef}> <TarotCard className="" cards={data} /> </div>) : (<div ref={scrollRef}></div>)}

        </div>
            


        
            );

};
export default TarotReading;