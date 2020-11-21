import React from 'react';
import ListOfGifs from 'components/ListOfGifs';
import Spinner from 'components/Spinner'
import {useGifs} from 'hooks/useGifs'

export default function SearchResults({ params }) { 
  const { keyword } = params  
  const { loading, gifs, setPage } = useGifs({ keyword }) // custom hook que devuelve loading y gifs
    
  const handleNextPage = () => setPage(prevPage => prevPage + 1)

  return (
    <React.Fragment>
      {loading
        ? <Spinner />
        : <React.Fragment>
            <h3>Results for '{decodeURI(keyword)}'</h3>
            <ListOfGifs gifs={gifs} />
          </React.Fragment>
      }
      <button onClick={handleNextPage}>Get next page</button>
    </React.Fragment>     
  );
}