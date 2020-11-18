import './Gif.css'

export default function Gif ({title, id, url}) {
  return(
    <a className='Gif' href={`#${id}`} >
      <h4>{title}</h4>
      <p>{id}</p>
      <img alt={title} src={url} />
    </a> 
  )
}