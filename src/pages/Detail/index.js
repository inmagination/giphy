import React from 'react'
import useSingleGif from 'hooks/useSingleGif';
import Spinner from 'components/Spinner';
import { Redirect } from 'wouter';
import useSeo from 'hooks/useSeo';


export default function Detail({params}) {  
  const { gif, isLoading, isError } = useSingleGif({id: params.id})
  
  const title = gif ? gif.title : ''
  useSeo({description: `Details of ${title}`, title})
  
  if ( isError ) return <Redirect to='/404' />
  if ( isLoading ) return <Spinner />  
  if ( !gif ) return null

  return (
    <React.Fragment>
      <img alt={gif.title} src={gif.url} />      
    </React.Fragment>
  )
}