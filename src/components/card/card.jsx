import React from 'react'
import './card.css'
const Card=(props)=>{
    return(
        <div className='card-container'>
            <img  src={`https://randomuser.me/api/portraits/men/${props.monster.id}.jpg`} alt=""/>
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>

    )

}
export default Card