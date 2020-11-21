import {useContext, useEffect, useState} from 'react';
import getGifs from 'services/getGifs';
import GifsContext from 'context/GifsContext' 

const INITAL_PAGE = 0

export function useGifs ({ keyword } = { keyword: null } ) {
  const [loading, setLoading] = useState(false); 
  const [loadingNextPage, setLoadingNextPage] = useState(false);

  const [page, setPage] = useState(INITAL_PAGE)
  const keywordToUse = keyword || localStorage.getItem('lastKeword') || 'random'

  // const [gifs, setGifs] = useState([]); // estado local
  const {gifs, setGifs} = useContext(GifsContext); // estado contexto especifico  
   

  // se ejecuta cada vez que se renderiza un componente
  // tiene dos parametros: la funcion a ejecutar cuando se renderiza el componente y un array de dependencias
  useEffect(() => {    
    setLoading(true)     

    getGifs({ keyword: keywordToUse })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
        localStorage.setItem('lastKeword', keyword)
      })
  }, [keyword, keywordToUse, setGifs]) // pasamos dependencia para que cada vez que cambie se renderice la lista


  // paginación en los gifs de resultados
  useEffect(() => {
    if ( page === INITAL_PAGE ) return
    setLoadingNextPage(true)    

    getGifs({ keyword: keywordToUse, page})
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        setLoadingNextPage(false)
      })

  }, [keywordToUse, setGifs, page])

  return {loading, loadingNextPage, gifs, setPage}
}
