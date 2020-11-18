import {useContext, useEffect, useState} from 'react';
import getGifs from '../services/getGifs';
import GifsContext from '../context/GifsContext' 

export function useGifs ({ keyword } = { keyword: null } ) {
  const [loading, setLoading] = useState(false); 

  // const [gifs, setGifs] = useState([]); // estado local
  const {gifs, setGifs} = useContext(GifsContext); // estado contexto especifico    

  // se ejecuta cada vez que se renderiza un componente
  // tiene dos parametros: la funcion a ejecutar cuando se renderiza el componente y un array de dependencias
  useEffect(() => {
    const keywordToUse = keyword || localStorage.getItem('lastKeword') || 'random'
    setLoading(true)     

    getGifs({ keyword: keywordToUse })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
        localStorage.setItem('lastKeword', keyword)
      })
  }, [keyword, setGifs]) // pasamos dependencia para que cada vez que cambie se renderice la lista

  return {loading, gifs}
}
