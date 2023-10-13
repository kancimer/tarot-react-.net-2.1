import React from 'react';
import TarotCard from './TarotCard';

{/*prevReading?(localStorage.getItem("reading").map((card) => { <div key={card.id}><h3>{card.name}</h3> <img id={card.imageId} src={TarotCardImg.find(o => o.id === card.imageId)?.image} /> </div> })) : (<div><h3>No previous readings found</h3></div>)*/ }
// { localStorage.getItem("reading") ? (<h3>Nasao ga je</h3>) : (<h3>sadface.jpg</h3>); }
const ReadingHistory = () => {

    const prevReading = JSON.parse(localStorage.getItem("reading"));
    console.log(prevReading[0].name);
    return (
        <div>
            <h1>Last Tarot Reading</h1>
            <TarotCard cards={prevReading} />
        </div>
    );
}

export default ReadingHistory;