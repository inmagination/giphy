import React from 'react'
import 'components/TrendingSearches/styles.css'

import {useEffect, useState} from 'react';
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

  useEffect(() => {

    // callback que se ejecuta cuando el componente observado cambie
    // entries: todas las entras que se están observados (pueden ser varios)
    const onChange = (entries) => {
      const el = entries[0] // solo estamos usando un elemento
      if (el.isIntersecting) {
        setShow(true)
      }
    }

    // nos permitira hacer un lazyloading del componente
    const observer = new IntersectionObserver(onChange, {
      rootMargin: '100px' // a la distancia de 100px detectará la inteseccion con viewport
    })

    // observar el elemento que deseamos vigilar
    observer.observe(document.getElementById('LazyTrending'))
  })
  
  return <div id='LazyTrending'>
    {show ? <TrendingSearches /> : null}
  </div>   
}