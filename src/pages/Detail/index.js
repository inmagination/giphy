import React from 'react'
import useSingleGif from 'hooks/useSingleGif';

export default function Detail({params}) {  
  const gif = useSingleGif({id: params.id})
  if (!gif) return null

  return (
    <React.Fragment>
      <img alt={gif.title} src={gif.url} />      
    </React.Fragment>
  )
}