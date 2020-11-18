import React, { useState } from 'react'
import { Link, useLocation } from "wouter";

const POPULAR_GIFS = ['husky', 'panda', 'tiger'];

export default function Home() { 
  const [keyword, setKeyword] = useState('')
  const [path, setLocation] = useLocation()
  
  const handleSubmit = event => {
    event.preventDefault();
    setLocation(`search/${keyword}`)
  }

  const handleChange = event => {
    setKeyword(event.target.value)
  }

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input 
          type='text' 
          value={keyword} 
          onChange={handleChange} 
          placeholder='Search a gif...'/>
      </form>
      <h3 className='App-title'>Los gifs más populares</h3> 
      <ul>
        {POPULAR_GIFS.map(popularGif => (           
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gif {popularGif}</Link>
          </li>
          ))}
      </ul>      
    </React.Fragment>
  );
}