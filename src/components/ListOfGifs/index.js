import Gif from 'components/Gif'
import 'components/ListOfGifs/styles.scss'

export default function ListOfGifs ({ gifs }) {
  return (
    <div className='ListOfGifs'>
      {
        gifs.map( ({id, title, url, ...restOfGif}) => 
          <Gif 
            key={id} // las listas necesitan una key unica para maxima optimizacion
            title={title} 
            url={url} 
            id={id} 
            extraInfo={restOfGif} // objeto complejo pasado como prop
          />
        )
      }  
  </div>
  )
}

