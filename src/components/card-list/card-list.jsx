import React from 'react'
import './card-list.css'
import Card from '../card/card'
const CardList=(props)=>{
    
    return(
        
        <div className='card-list'>
            {props.monster.map(user=><Card key={user.id} monster={user}/>)}
        </div>
    )
    
}
export default CardList