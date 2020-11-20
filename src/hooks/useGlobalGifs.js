import React, { useContext } from 'react'
import GifsContext from 'context/GifsContext'

// custom hook para obtener los difs del contexto global
// es muy habitual en librerias como react router
export default function useGlobalGifs() {  
  return useContext(GifsContext).gifs;
}