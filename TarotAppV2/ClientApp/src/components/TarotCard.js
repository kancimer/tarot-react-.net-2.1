import React, { useState } from 'react';
import TarotCardImg from './TarotCardImages';
import { Card, CardBody, CardTitle, CardText, Col, Row } from 'reactstrap';
import './TarotCard.css';
import { motion } from 'framer-motion';

const TarotCard = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);

   
        setTimeout(() => {
            setIsFlipped(true);
        }, 1000);
       
    

    return (
        <div>
            <Row>
                {props.cards.map((item) => (
                    <div className="col col-lg-3 " key={`item-${item.id}`} >
                        <Col>
                            
                            <div className="scene scene--tarotcard">
                                <div className= {`tarotcard ${isFlipped ? 'is-flipped' : ''}`}>
                                    <div className="tarotcard__face tarotcard__face--front"></div>
                                    <div className="tarotcard__face tarotcard__face--back"><img className="tarotimg" alt={item.name} src={TarotCardImg.find(o => o.id === item.imageId)?.image} /></div>
                                </div>
                                </div>
                            <motion.div
                                className="box"
                                initial={{ opacity: 0, scale: 0.5, x: 500 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 1,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }}
                            ><h5>{item.name}</h5><p>{item.description}</p></motion.div>
                        </Col>
                    </div>
                ))}
            </Row>
        </div>
    );
};

export default TarotCard;

/*
nakon cardbody:
<Card className={`tarotcard ${isFlipped ? 'is-flipped' : ''}`} onClick={handleCardFlip} color="light">
<CardBody>
                                    <div className="tarot-card" onClick={handleCardFlip}>
                                        <div className="tarot-card-inner">
                                            <div className={`tarot-card-face tarot-card-face-front ${isFlipped ? 'flipped' : ''}`}>
                                                <img className="w-75 p-2" alt={item.name} src={item.localImage} />
                                            </div>
                                            <div className={`tarot-card-face tarot-card-face-back ${isFlipped ? 'flipped' : ''}`}>
                                                <img className="w-75 p-2" alt={item.name} src={TarotCardImg.find(o => o.id === item.imageId)?.image} />
                                            </div>
                                        </div>
                                    </div>

                                    <CardTitle tag="h5">{item.name}</CardTitle>
                                    <CardText>{item.description}</CardText>
                                </CardBody> </Card>
*/

/*import React, { useState, useEffect} from 'react';
import TarotCardImg from './TarotCardImages';
import { Card, CardBody, CardTitle, CardText, Col, Row, Container } from 'reactstrap';
import './TarotCard.css';

import { motion } from "framer-motion";

const TarotCard = (props) => { 
    return (<div ><Row>
        {
            props.cards.map((item) =>

                <div class="col col-lg-3" key={`item-${item.id}`}>
                    <Col>
                        <motion.div
                            
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 1,
                                delay: 0.2,
                                ease: [0, 0.71, 0.2, 1.01],
                                type: "spring"
                            }}
                        >
                            <Card className="tarotcard"  color="light"  >
                                <CardBody>

                                    <img key={`item-${item.id}`} class="w-75 p-2" alt={item.name} src={TarotCardImg.find(o => o.id === item.imageId)?.image} />

                                    <CardTitle tag="h5">
                                        {item.name}
                                    </CardTitle>
                                    <CardText>
                                        {item.description}
                                    </CardText>
                                </CardBody>
                            </Card>
                        </motion.div>
                    </Col>
                </div>
            )
        }

    </Row></div>);

}

export default TarotCard;*/
