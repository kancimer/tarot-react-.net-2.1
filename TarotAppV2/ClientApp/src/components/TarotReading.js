import React, { Component, useEffect, useState, useRef } from 'react';
import TarotCard from './TarotCard';
import '../custom.css';
import TarotCardImg from './TarotCardImages';
import { motion } from "framer-motion";
import './TarotReading.css'; 
import SpreadCardStack from './SpreadCardStack';
import backOfCard from './backOfCard.jpg';

import { Button, Input, Form, Row, Col, FormGroup, Container } from 'reactstrap';

const TarotReading = () => {
    //localStorage.setItem("name",card.name); 
    const [data, setData] = useState(null);
    const [numOfCards, setNumOfCards] = useState(0);
    const [userMsg, setUserMsg] = useState("");
    const scrollRef = useRef(null);
    const greeting = "Welcome to your Tarot reading! Choose a number of cards for your reading.";
    const pickedCards = (num) => {
        setNumOfCards(num);
    };
    function getData() {
        setUserMsg("Shuffling cards...");
        fetch(`api/${numOfCards}`)
            .then((results) => {
                //return results.json();
                return results.json();
                //return JSON.parse(results);
            })
            .then(res => {
                //let selectedText = JSON.stringify(res);
                setData(JSON.parse(JSON.stringify(res)));
                //localStorage.clear();
                localStorage.setItem("reading", JSON.stringify(res));
                console.log(JSON.stringify(res));
                //setData(JSON.parse(JSON.stringify(res)).map((card) => { <div key={card.id}><h3>{card.name}</h3> </div> }));
            });
       

    }



    return (
        <div>
            
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
                <h3>{greeting}</h3> </motion.div>
            <Form className="row justify-content-md-center">
                <Container >
                
                        <FormGroup >
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
                                
                            <Col lg={1} xs={3}>
                                   
                                        <Input
                                    
                                value={numOfCards}
                                onChange={e => { if (e.target.value < 78 && e.target.value > 0) { setNumOfCards(e.target.value) } else { alert("Please enter a positive integer that does not exceed number of cards in the deck!"); } }}
                                type="number"
                                
                                /> 
                            </Col>
                        
                                    <Col xs={2}>
                                    <Button onClick={() => {
                                        setTimeout(() => {
                                            getData(); scrollRef.current.scrollIntoView({ behavior: 'smooth' });
                                        }, 1000);  } } >
                                Generate {numOfCards} Tarot cards
                                    
                                        </Button>
                                </Col>
                            
                                </Row></motion.div>
                        </FormGroup>
                    
                </Container>
            </Form>
            <SpreadCardStack pickedCards={pickedCards} />
            {data ? (<div ref={scrollRef}> <TarotCard cards={data} /> </div>) : (<h3>{userMsg}</h3>)}

        </div>
            


        
            );

};
export default TarotReading;