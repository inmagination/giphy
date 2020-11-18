import './Gif.css'

export default function Gif ({title, id, url}) {
  return(
    <a className='Gif' href={`#${id}`} >
      <h6>{title}</h6>
      <img alt={title} src={url} />
    </a> 
  )
}