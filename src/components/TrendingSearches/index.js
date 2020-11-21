import React from 'react'
import 'components/TrendingSearches/styles.css'

import {useEffect, useState} from 'react';
import { Link } from "wouter";

import getTrendingGifs from 'services/getTrendingGifs'
import useNearScreen from 'hooks/useNearScreen'

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
  const {isNearScreen, fromRef} = useNearScreen({distance: '200px'})   
  
  return <div ref={fromRef}>
    {isNearScreen ? <TrendingSearches /> : null}
  </div>   
}