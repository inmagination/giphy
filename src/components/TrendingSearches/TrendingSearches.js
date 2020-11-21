import React, {useEffect, useState} from 'react';
import { Link } from "wouter";
import getTrendingGifs from 'services/getTrendingGifs'

export default function TrendingSearches () {
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