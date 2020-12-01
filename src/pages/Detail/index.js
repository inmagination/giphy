import React from 'react'
import useSingleGif from 'hooks/useSingleGif';
import Spinner from 'components/Spinner';
import { Redirect } from 'wouter';


export default function Detail({params}) {  
  const { gif, isLoading, isError } = useSingleGif({id: params.id})
  
  if ( isError ) return <Redirect to='/404' />
  if ( isLoading ) return <Spinner />  
  if ( !gif ) return null

  return (
    <React.Fragment>
      <img alt={gif.title} src={gif.url} />      
    </React.Fragment>
  )
}