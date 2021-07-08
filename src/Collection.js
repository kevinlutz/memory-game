import React, { useState, useEffect } from 'react'
import Card from './Card'
import data from './data'

export default function Collection() {
    const [stack, setStack] = useState([])   //data is the default export (array) from data.js, stack is the variable name of the array (which could be any name you choose to name it)
    useEffect(() => {
        const scramble = (arr) => {
            arr.forEach((item, i) => {
                const randomIndex = Math.floor(Math.random()*(16-i)) + i
                const currentCard = item                    //saving the value of the current card in the loop, before swapping them
                const randomCard = arr[randomIndex]         //saving value of the item at the random index before swapping them
                arr[i] = randomCard                         //swaping cards
                arr[randomIndex] = currentCard              //swapping cards
            })
        }
        const shuffled = scramble(data)
        setStack(shuffled)
    }, [stack])
    
    

    return (
        <div className='collection'>
           {stack && stack.map(card => {
               return <Card card={card}/>
           })}
        </div>
    )
}
