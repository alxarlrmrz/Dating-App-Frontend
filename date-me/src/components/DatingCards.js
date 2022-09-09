import React, { useState, useEffect } from 'react'
import DatingCard from 'react-tinder-card'
import './DatingCards.css'
import axios from './axios'

const DatingCards = () => {
    const [people, setPeople] = useState([
        { name: "Tom Ford", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR25x2ULNcWKxl6ztPV1fjoxWx7DWcSYBePsg&usqp=CAU" },
        { name: "Daniel Roseberry", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnUC3wqBkvucJAf_nNqkJdBc1lMAVGCF4FXg&usqp=CAU" },
        { name: "Simon Porte Jacquemus", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuw_buKObKbFWZwzpiOUGvKWEyfKmlZqMRRw&usqp=CAU" },
        { name: "Olivier Rousteing", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ7cHEofwpzxnT3HdhFOdbA_M9daLKDC4yLbwAgbgPFBmXPoJEHp5xVdgg_ONZItb-VHk&usqp=CAU" }
 ])
 useEffect(() => {
    async function fetchData() {
        const req = await axios.get("/dating/cards")
        setPeople(req.data)
    }
    fetchData()
}, [])

    const swiped = (direction, nameToDelete) => {
        console.log("receiving " + nameToDelete)
    }
    const outOfFrame = (name) => {
        console.log(name + " left the screen!!")
    }
    return (
        <div className="datingCards">
            <div className="datingCards__container">
                {people.map((person) => (
                    <DatingCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)} >
                        <div style={{ backgroundImage: `url(${person.imgUrl})`}} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </DatingCard>
                ))}
            </div>
        </div>
    )
}
export default DatingCards