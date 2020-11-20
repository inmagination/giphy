import 'components/TrendingSearches/styles.css'

import {useEffect, useState} from 'react';
import getTrendingGifs from 'services/getTrendingGifs'
import { Link } from "wouter";

export default function TrendingSearches () {
  const [trends, setTrends] = useState([])

  useEffect(() => {     
    getTrendingGifs().then(setTrends)
  }, [])

  return(
    <ul className='trends'>
      {trends.map(trend => (           
        <li key={trend}>
          <Link to={`/search/${trend}`}>{trend}</Link>
        </li>
      ))}
    </ul> 
  )
}