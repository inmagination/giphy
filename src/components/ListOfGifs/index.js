import Gif from '../Gif'
import './styles.css'

export default function ListOfGifs ({ gifs }) {
  return (
    <div className='ListOfGifs'>
      {
        gifs.map( ({id, title, url}) => 
          <Gif 
            key={id} // las listas necesitan una key unica para maxima optimizacion
            title={title} 
            url={url} 
            id={id} 
          />
        )
      }  
  </div>
  )
}

