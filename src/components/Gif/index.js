import React from 'react';
import { Link } from "wouter";
import 'components/Gif/styles.scss'

function Gif ({title, id, url}) {
  return(    
    <div className="Gif">
      <Link to={`/gif/${id}`}>
        <img className='Gif__img' alt={title} src={url} />
      </Link> 
    </div>
  )
}

// evitar que se rendericen los gifs que ya lo han hecho al hacer scroll
// solo se renderizaran los que se vayan añadiendo por el scroll
export default React.memo(Gif, (prevProps, nextProps) => {
  // si se pasan props por objetos evitar que se rendericen todos los gifs
  // react no compara cambios en objetos
  return prevProps.id === nextProps.id
})