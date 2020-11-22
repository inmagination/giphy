import { Link } from "wouter";
import 'components/Gif/styles.scss'

export default function Gif ({title, id, url}) {
  return(    
    <div className="Gif">
      <Link to={`/gif/${id}`}>
        <img className='Gif__img' alt={title} src={url} />
      </Link> 
    </div>
  )
}