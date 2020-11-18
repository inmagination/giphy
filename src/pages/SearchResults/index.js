import React, {useEffect, useState} from 'react';
import ListOfGifs from '../../components/ListOfGifs';
import getGifs from '../../services/getGifs';

export default function SearchResults({ params }) { 
  const { keyword } = params  
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  // se ejecuta cada vez que se renderiza un componente
  // tiene dos parametros: la funcion a ejecutar cuando se renderiza el componente y un array de dependencias
  useEffect(() => {
    setLoading(true) 
    getGifs({ keyword })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
      })
  }, [keyword]) // pasamos dependencia para que cada vez que ambie de renderice la lista
  
  return (
    <React.Fragment>
      {loading
        ? <h4>Cargando....</h4>
        : <ListOfGifs gifs={gifs} />
      }
    </React.Fragment>     
  );
}