import { Link } from "wouter";
import 'components/Gif/styles.scss'

export default function Gif ({title, id, url}) {
  return(
    <Link className='Gif' to={`/gif/${id}`}>
      <h6>{title}</h6>
      <img alt={title} src={url} />
    </Link> 
  )
}