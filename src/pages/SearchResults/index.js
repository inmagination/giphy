import React, { useCallback, useEffect, useRef } from 'react';
import ListOfGifs from 'components/ListOfGifs';
import Spinner from 'components/Spinner'
import { useGifs } from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'
import useSeo from 'hooks/useSeo';

export default function SearchResults({ params }) { 
  const { keyword } = params  
  const { loading, gifs, setPage } = useGifs({ keyword }) // custom hook que devuelve loading y gifs
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({ 
    externalRef : loading ? null : externalRef,
    once: false
  }) 

  const title = gifs ? `${gifs.length} resultados de ${keyword}` : ''
  useSeo({description: `${title}`, title})

  const debounceHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 1000
  ), [])

  useEffect(() => {
    if ( isNearScreen ) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])

  return (
    <React.Fragment>
      {loading
        ? <Spinner />
        : <React.Fragment>
            <h3>Results for '{decodeURI(keyword)}'</h3>
            <ListOfGifs gifs={gifs} />
            <div id='visor' ref={externalRef}></div>
          </React.Fragment>
      }
    </React.Fragment>     
  );
}