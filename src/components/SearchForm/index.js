import React, { useState } from 'react'
import { useLocation } from "wouter";

const RATINGS = ['g', 'pg', 'pg-13', 'r']

function SearchForm () {
  const [keyword, setKeyword] = useState('')
  const [rating, setRating] = useState(RATINGS[0])
  const [, setLocation] = useLocation()

  const handleSubmit = event => {
    event.preventDefault();
    setLocation(`/search/${keyword}/${rating}`)
  }

  const handleChangeRating = event => {
    setRating(event.target.value)
  }

  const handleChange = event => {
    setKeyword(event.target.value)
  }   

  return(    
    <form onSubmit={handleSubmit}>      
      <input 
        type='text' 
        value={keyword} 
        onChange={handleChange} 
        placeholder='Search a gif...'/>

      <select value={rating} onChange={handleChangeRating}>
        {RATINGS.map(rating => <option key={rating}>{rating}</option>)}
      </select>

      <button>Buscar</button>
    </form>
  )
}

// memo > componente de orden superior que le pasas un componente y te devuelve otro
export default React.memo(SearchForm)