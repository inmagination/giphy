import { Link } from "wouter";
import './Gif.css'

export default function Gif ({title, id, url}) {
  return(
    <Link className='Gif' to={`/gif/${id}`}>
      <h6>{title}</h6>
      <img alt={title} src={url} />
    </Link> 
  )
}