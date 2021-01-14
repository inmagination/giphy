import React, { useReducer } from 'react'
import { useLocation } from "wouter";
import 'components/SearchForm/styles.scss'


const RATINGS = ['g', 'pg', 'pg-13', 'r']
const ACTIONS = {
  UPDATE_KEYWORD: 'update_keyword',
  UPDATE_RATING: 'update_rating',
  RESET: 'reset'
}
const INITIAL_STATE = {
  keyword: '',
  rating: 'g', 
  times: 0
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

    case ACTIONS.RESET:
      return {
        keyword: INITIAL_STATE.keyword,
        rating: INITIAL_STATE.rating, 
        times: INITIAL_STATE.times
      }
  
    default:
      return state
  }
}

function SearchForm ( { initialKeyword = INITIAL_STATE.keyword, initialRating = INITIAL_STATE.rating } ) {

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
    dispatch({ type: ACTIONS.UPDATE_RATING, payload: event.target.value })
  }

  const handleChange = event => {
    dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: event.target.value })
  }  

  const handleReset = event => {
    event.preventDefault()
    dispatch({ type: ACTIONS.RESET })
  }

  return(     
    <form onSubmit={handleSubmit} className='SearchForm'>   
      <div className='SearchForm__data'>
        <input 
          type='text' 
          value={keyword} 
          onChange={handleChange} 
          placeholder='Search a gif...'/>

        <select value={rating} onChange={handleChangeRating}>
          {RATINGS.map(rating => <option key={rating}>{rating}</option>)}
        </select>

        <small>{times}</small>  
      </div>   
      
      <div className='SearchForm__buttons'>
        <button onClick={handleReset} className='SearchForm__reset'>Reset</button> 
        <button>Buscar</button>         
      </div>              
    </form>
  )
}

// memo > componente de orden superior que le pasas un componente y te devuelve otro
export default React.memo(SearchForm)