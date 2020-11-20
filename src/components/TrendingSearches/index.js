import React from 'react'
import 'components/TrendingSearches/styles.css'

import {useEffect, useState, useRef} from 'react';
import getTrendingGifs from 'services/getTrendingGifs'
import { Link } from "wouter";

function TrendingSearches () {
  const [trends, setTrends] = useState([])

  useEffect(() => {     
    getTrendingGifs().then(setTrends)
  }, [])

  return(
    <React.Fragment>
      <h4>Tendencias</h4>
      <ul className='trends'>
        {trends.map(trend => (           
          <li key={trend}>
            <Link to={`/search/${trend}`}>{trend}</Link>
          </li>
        ))}
      </ul> 
    </React.Fragment>
  )
}

export default function LazyTrending () {
  const [show, setShow] = useState(false)
  const elementRef = useRef() // referencia a un elemento del DOM sin selectores
  let observer = null

  useEffect(() => {

    // callback que se ejecuta cuando el componente observado cambie
    // entries: todas las entras que se están observados (pueden ser varios)
    const onChange = (entries, observer) => {
      const el = entries[0] // solo estamos usando un elemento
      if (el.isIntersecting) {
        setShow(true)
        observer.disconnect() // deshabilitar el observer para que no siga saltando
      }
    }

    // para dar soporte a los navegadores que no tienen IntersectionObserver (IE11)
    // pedimos la libreria npm solo si la necesitamos (si lo ponemos arriba la pedirá siempre)
    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')         
    ).then(() => {
      // nos permitira hacer un lazyloading del componente
      observer = new IntersectionObserver(onChange, {
        rootMargin: '100px' // a la distancia de 100px detectará la inteseccion con viewport
      })

      // observar el elemento que deseamos vigilar
      // pasamos el elemento referenciado de userRef
      observer.observe(elementRef.current)
    })    

    // devolvemos la desconexion para que cuando el componente se deje de usar se limpie el evento
    // se ecita por ejemplo que se ejecute el setShow cuando el componente
    return () => observer && observer.disconnect()
  })
  
  return <div ref={elementRef}>
    {show ? <TrendingSearches /> : null}
  </div>   
}