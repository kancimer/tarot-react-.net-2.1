import React, { useState, useEffect} from 'react';
import TarotCardImg from './TarotCardImages';
import { Card, CardBody, CardTitle, CardText, Col, Row, Container } from 'reactstrap';
import './TarotCard.css';
import backOfCard from './backOfCard.jpg';
import { motion } from "framer-motion";

//<img key={`item-${item.id}`} src={TarotCardImg.find(o => o.id === item.imageId)?.image} />
// <h2>{props.cards[0].name}</h2>
const TarotCard = (props) => { 
    return (<div ><Row>
        {
            props.cards.map((item) =>

                <div class="col col-lg-3" key={`item-${item.id}`}>
                    <Col>
                        <motion.div
                            className="box"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 1,
                                delay: 0.2,
                                ease: [0, 0.71, 0.2, 1.01],
                                type: "spring"
                            }}
                        >
                            <Card classname="card" outline="true" color="light"  >
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

export default TarotCard;
/*const TarotCard = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        // Delay the flip animation by a short time after rendering
        const delay = setTimeout(() => {
            setIsFlipped(true);
        }, 500); // Adjust the delay as needed

        return () => clearTimeout(delay);
    }, []);

    return (
        <div>
            {!isFlipped ? (<img
                className={`w-100 p-3 back ${!isFlipped ? '' : 'hidden'}`}
                alt="Back of Card"
                src={backOfCard} // Replace with your back-of-card image source
            />) :(<Row>

                {props.cards.map((item) => (
                    <div className="col col-lg-2" key={`item-${item.id}`}>
                        <Col>
                            <Card className={`card ${isFlipped ? 'flipped' : ''}`}>
                                <CardBody>
                                    <div className="card-content">
                                        <img
                                            key={`item-${item.id}`}
                                            className={`w-100 p-3 front ${isFlipped ? 'hidden' : ''}`}
                                            alt={item.name}
                                            src={TarotCardImg.find((o) => o.id === item.imageId)?.image}
                                        />
                                       
                                    </div>
                                    <CardTitle tag="h5">{item.name}</CardTitle>
                                    <CardText>{item.description}</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </div>
                ))}
            </Row>)}
        </div>
    );
};

export default TarotCard;*/