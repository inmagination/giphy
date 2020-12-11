import React, { useState } from 'react'
import { useLocation } from "wouter";

function SearchForm () {
  const [keyword, setKeyword] = useState('')
  const [, setLocation] = useLocation()

  const handleSubmit = event => {
    event.preventDefault();
    setLocation(keyword)
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
      <button>Buscar</button>
    </form>
  )
}

// memo > componente de orden superior que le pasas un componente y te devuelve otro
export default React.memo(SearchForm)