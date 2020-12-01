import React, { useCallback } from 'react'
import { Link, useLocation } from "wouter";

import ListOfGifs from 'components/ListOfGifs';
import Spinner from 'components/Spinner';
import LazyTrending from 'components/TrendingSearches';
import SearchForm from 'components/SearchForm';

import {useGifs} from 'hooks/useGifs'
import useSeo from 'hooks/useSeo';

const POPULAR_GIFS = ['husky', 'panda', 'tiger'];

export default function Home() {   
  const [path, setLocation] = useLocation()
  const { loading, gifs } = useGifs()
  
  // evitamos que se cree el componente continuamente al cargar pagina (ver react dev tools)
  const handleSubmit = useCallback(({keyword}) => {
    setLocation(`search/${keyword}`)
  }, [setLocation])

  useSeo({description: `Home searcher gifs`, title: 'Home Search'})

  return (
    <React.Fragment>   
      <SearchForm onSubmit={handleSubmit} />

      <h4 className='App-title'>Los gifs más populares</h4> 
      <ul>
        {POPULAR_GIFS.map(popularGif => (           
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gif {popularGif}</Link>
          </li>
          ))}
      </ul>        

      <h4>Última búsqueda</h4>
        {loading
          ? <Spinner />
          : <ListOfGifs gifs={gifs} />
        } 

        <LazyTrending />
    </React.Fragment>
  );
}