import React from 'react'
import useSingleGif from 'hooks/useSingleGif';
import Spinner from 'components/Spinner';
import { Redirect } from 'wouter';
import { Helmet } from "react-helmet";


export default function Detail({params}) {  
  const { gif, isLoading, isError } = useSingleGif({id: params.id}) 
  const title = gif ? `Giphy | ${gif.title}` : 'Giphy | Details'
  
  if ( isError ) return <Redirect to='/404' />

  if ( isLoading ) return(
    <React.Fragment>
      <Helmet>
        <title>Cargando..</title>        
      </Helmet>
      <Spinner />
    </React.Fragment>
  )

  if ( !gif ) return null

  return (
    <React.Fragment>
      <Helmet>
        <title>{title}</title>  
        <meta name="description" content={title} />      
      </Helmet>
      <img alt={gif.title} src={gif.url} />      
    </React.Fragment>
  )
}