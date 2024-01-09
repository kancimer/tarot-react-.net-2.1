import React, { useState } from 'react';
import TarotCardImg from './TarotCardImages';
import { Col, Row } from 'reactstrap';
import './TarotCard.css';
import { motion } from 'framer-motion';

const TarotCard = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);

   
        setTimeout(() => {
            setIsFlipped(true);
        }, 300);
       
    

    return (
        <div>
            <Row className="row justify-content-md-center">
                {props.cards.map((item) => (
                    <div className="d-flex col col-lg-3 " key={`item-${item.id}`} >
                        <Col>
                            
                            <div className="d-flex  scene scene--tarotcard">
                                <div className={`tarotcard ${isFlipped ? 'is-flipped' : ''}`}>
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
                                    delay: 0.6,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }}
                            ><h5 className="d-flex justify-content-center">{item.name}</h5><p className="d-flex justify-content-center">{item.description}</p></motion.div>
                        </Col>
                    </div>
                ))}
            </Row>
        </div>
    );
};

export default TarotCard;

