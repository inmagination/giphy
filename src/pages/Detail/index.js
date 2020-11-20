import React from 'react'
import useGlobalGifs from 'hooks/useGlobalGifs'

export default function Detail({params}) {  
  const gifs = useGlobalGifs();
  const detailGif = gifs.find(gif => gif.id === params.id )

  return (
    <React.Fragment>
      <img alt={detailGif.title} src={detailGif.url} />      
    </React.Fragment>
  )
}