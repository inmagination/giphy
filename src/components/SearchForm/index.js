import React from 'react'
import { useLocation } from "wouter";
import useForm from 'components/SearchForm/useForm'
import 'components/SearchForm/styles.scss'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

function SearchForm ( { initialKeyword = '', initialRating = 'g' } ) {
  const { keyword, rating, times, updateKeyword, updateRating, reset } = useForm({ initialKeyword, initialRating })
  const [ _, setLocation] = useLocation()

  const handleSubmit = event => {
    event.preventDefault();
    setLocation(`/search/${keyword}/${rating}`)
  }

  const handleChangeRating = event => {
    updateRating(event.target.value)
  }

  const handleChange = event => {
    updateKeyword(event.target.value)
  }  

  const handleReset = event => {
    event.preventDefault()
    reset()
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