import React, { useReducer } from 'react'
import { useLocation } from "wouter";

const RATINGS = ['g', 'pg', 'pg-13', 'r']

const reducer = (state, action) => {
  if ( action.type === 'update_keyword' ) {
    return {
      ...state,
      keyword: action.payload,
      times: state.times + 1
    }
  } else if ( action.type === 'update_rating' ) {
    return {
      ...state,
      rating: action.payload
    }
  }

  return state
}

function SearchForm ( { initialKeyword = '', initialRating = 'g' } ) {

  const [state, dispatch] = useReducer(reducer, {
    keyword: decodeURIComponent(initialKeyword),
    rating: initialRating, 
    times: 0
  })

  const { keyword, rating, times } = state

  const [ _, setLocation] = useLocation()

  const handleSubmit = event => {
    event.preventDefault();
    setLocation(`/search/${keyword}/${rating}`)
  }

  const handleChangeRating = event => {
    dispatch({ type: 'update_rating', payload: event.target.value })
  }

  const handleChange = event => {
    dispatch({ type: 'update_keyword', payload: event.target.value })
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