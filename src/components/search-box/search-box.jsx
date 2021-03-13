import React from 'react'
import './search-box.css'
const SearchBox=({search_person})=>{
    return(
        <div className='search_bar'>
            <input 
               type="search" 
               placeholder='search user'
               onChange={search_person}
        
            />

        </div>

    )
}
export default  SearchBox