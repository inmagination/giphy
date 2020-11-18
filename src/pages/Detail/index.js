import React, { useContext } from 'react'
import GifsContext from '../../context/GifsContext'

export default function Detail({params}) {  
  const {gifs} = useContext(GifsContext);
  const detailGif = gifs.find(gif => gif.id === params.id )

  return (
    <React.Fragment>
      <img alt={detailGif.title} src={detailGif.url} />      
    </React.Fragment>
  )
}