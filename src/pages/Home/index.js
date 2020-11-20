import React, { useState } from 'react'
import { Link, useLocation } from "wouter";

import ListOfGifs from 'components/ListOfGifs';
import TrendingSearches from 'components/TrendingSearches';
import {useGifs} from 'hooks/useGifs'

const POPULAR_GIFS = ['husky', 'panda', 'tiger'];

export default function Home() { 
  const [keyword, setKeyword] = useState('')
  const [path, setLocation] = useLocation()
  const { loading, gifs } = useGifs()
  
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

      <h4 className='App-title'>Los gifs más populares</h4> 
      <ul>
        {POPULAR_GIFS.map(popularGif => (           
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gif {popularGif}</Link>
          </li>
          ))}
      </ul>   


      <h4>Tendencias</h4>
      <TrendingSearches />

      <h4>Última búsqueda</h4>
        {loading
          ? <h4>Cargando....</h4>
          : <ListOfGifs gifs={gifs} />
        }   
    </React.Fragment>
  );
}