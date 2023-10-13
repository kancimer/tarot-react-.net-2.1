import React, { Component, useEffect, useState } from 'react';
import TarotCard from './TarotCard';
import '../custom.css';
import TarotCardImg from './TarotCardImages';
import { motion } from "framer-motion";
import './TarotReading.css'; 

import { Button, Input, Form, Row, Col, FormGroup, Container } from 'reactstrap';
//data ? (data.map((card) => <div><h3>{card.name}</h3> <img id={card.imageId} src={TarotCardImg.find(o => o.id === card.imageId)?.image} /> </div>)) : (<div>{greeting}</div>)
// startReading?(<div><button onclick="activateLasers()">Activate Lasers</button ></div>):(<div>{readingOptions}</div>)
//<img id={card.imageId} src={TarotCardImg.find(o => o.id === card.imageId)?.image} /> 
const TarotReading = () => {
    //localStorage.setItem("name",card.name); 
    const [data, setData] = useState(null);
    const [numOfCards, setNumOfCards] = useState(3);
    const [userMsg, setUserMsg] = useState("");
    const greeting = "Welcome to your Tarot reading! Choose a number of cards for your reading.";
    
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
                localStorage.clear();
                localStorage.setItem("reading", JSON.stringify(res));
                console.log(JSON.stringify(res));
                //setData(JSON.parse(JSON.stringify(res)).map((card) => { <div key={card.id}><h3>{card.name}</h3> </div> }));
            })

    }



    return (
        <div>
            <motion.div
                className="box"
                initial={{ opacity: 0, scale: 0.5, x:500}}
                animate={{ opacity: 1, scale: 1, x:0 }}
                transition={{
                    duration: 1,
                    delay: 0.2,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            >
            <h3>{greeting}</h3>
            <Form class="row justify-content-md-center">
                <Container>
                
                    <FormGroup >
                        <Row>
                            <Col lg={1} xs={3}>
                                <Input
                                    
                                value={numOfCards}
                                onChange={e => { if (e.target.value < 78 && e.target.value > 0) { setNumOfCards(e.target.value) } else { alert("Please enter a positive integer that does not exceed number of cards in the deck!"); } }}
                                type="number"
                                
                                />
                            </Col>
                        
                                    <Col xs={2}>
                                <Button onClick={getData} >
                                Generate {numOfCards} Tarot cards
                                    
                                        </Button>
                                    </Col>
                                </Row>
                        </FormGroup>
                    
                </Container>
                </Form>
                </motion.div>
            {data ? (<div><TarotCard cards={data} /></div>) : (<div><h3>{userMsg}</h3></div>)}

        </div>
            


        
            );

};
export default TarotReading;