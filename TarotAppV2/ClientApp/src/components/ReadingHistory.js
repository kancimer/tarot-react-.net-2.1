import React from 'react';
import TarotCard from './TarotCard';

const ReadingHistory = () => {

    const prevReading = JSON.parse(localStorage.getItem("reading"));
    console.log(prevReading[0].name);
    return (
        <div>
            <h6>Last Tarot Reading</h6>
            <TarotCard cards={prevReading} />
        </div>
    );
}

export default ReadingHistory;