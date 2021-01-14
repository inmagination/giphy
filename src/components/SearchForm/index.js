import React, { useReducer } from 'react'
import { useLocation } from "wouter";

const RATINGS = ['g', 'pg', 'pg-13', 'r']
const ACTIONS = {
  UPDATE_KEYWORD: 'update_keyword',
  UPDATE_RATING: 'update_rating'
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_KEYWORD:
      return {
        ...state,
        keyword: action.payload,
        times: state.times + 1
      }

    case ACTIONS.UPDATE_RATING:
      return {
        ...state,
        rating: action.payload
      }
  
    default:
      return state
  }
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
    dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: event.target.value })
  }

  const handleChange = event => {
    dispatch({ type: ACTIONS.UPDATE_RATING, payload: event.target.value })
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