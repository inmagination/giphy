import { useEffect, useRef } from "react"

export default function useSeo ({description, title}) {  
  const prevTitle = useRef(document.title)
  const prevDescription= useRef(document.querySelector('meta[name="description"]').getAttribute('content'))


  // actualizar cuando el title cambie
  useEffect(() => {
    const previousTitle = prevTitle.current
    if ( title ) {      
      document.title = `${title} | Giphy`
    }

    // a partir de la segunda ejecucion del useEffect se ejectua primero el return
    // es una manera de resetear el valor 
    return () => document.title = previousTitle
  }, [title])

  
  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]')
    const previousDescription = prevDescription.current

    if ( description ) {      
      metaDescription.setAttribute('content', description)
    }   
    return () => metaDescription.setAttribute('content', previousDescription)
  }, [description])
}