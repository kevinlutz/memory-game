import React, { useState } from 'react'
import Collection from './Collection'

export default function Card({ card }) {
    const [turned, setTurned] = useState(false)    //state to indicate whether the card is turned or not.

    return (
        <>
           {!turned ? (
               <div className='card card-back' onClick={() => setTurned(!turned)}>
                   Where are the animals?
               </div>
           ) : (
               <div className='card card-front' onClick={() => setTurned(!turned)}>
                   <img src={card.image} alt={card.name} />
               </div>
           )}
        </>
    )
}





//need unique IDs for cards UUID
//function to turn it over
//are they the same, or not?
//if not, function to turn cards back over if they are not the same
//if yes, then function to remove them
//reset the opportunity for two clicks, whether they were the same or not.
//random method to scramble the cards on the table, for each game reset
//reset or function to reset once your win