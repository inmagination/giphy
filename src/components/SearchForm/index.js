import React, { useReducer, useState } from 'react'
import { useLocation } from "wouter";

const RATINGS = ['g', 'pg', 'pg-13', 'r']

const reducer = (state, param) => {
  return {
    ...state,
    keyword: param,
    times: state.times + 1
  }
}

function SearchForm ( { initialKeyword = '', initialRating = 'g' } ) {
  const [rating, setRating] = useState(initialRating)

  const [state, dispatch] = useReducer(reducer, {
    keyword: decodeURIComponent(initialKeyword),
    times: 0
  })

  const { keyword, times } = state

  const [ _, setLocation] = useLocation()

  const handleSubmit = event => {
    event.preventDefault();
    setLocation(`/search/${keyword}/${rating}`)
  }

  const handleChangeRating = event => {
    setRating(event.target.value)
  }

  const handleChange = event => {
    updateKeyword(event.target.value)
  }   

  const updateKeyword = (keyword) => {
    dispatch(keyword)
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
      <small>{times}</small>
    </form>
  )
}

// memo > componente de orden superior que le pasas un componente y te devuelve otro
export default React.memo(SearchForm)