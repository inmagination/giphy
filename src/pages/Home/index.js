import React from 'react'
import { Link } from "wouter";
import { Helmet } from "react-helmet";

import ListOfGifs from 'components/ListOfGifs';
import Spinner from 'components/Spinner';
import LazyTrending from 'components/TrendingSearches';
import SearchForm from 'components/SearchForm';

import {useGifs} from 'hooks/useGifs'

const POPULAR_GIFS = ['husky', 'panda', 'tiger'];

export default function Home() {    
  const { loading, gifs } = useGifs() 

  return (
    <React.Fragment>   
      <Helmet>
        <title>Giphy | Home Search</title> 
        <meta name="description" content="Home search for Gifs application" />  
      </Helmet>

      <SearchForm />

      <h4 className='App-title'>Gifs más populares</h4> 
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