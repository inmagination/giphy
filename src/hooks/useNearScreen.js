import {useEffect, useState, useRef} from 'react';

export default function useNearScreen({distance = '100px'} = {}) {  
  const [isNearScreen, setShow] = useState(false)
  const fromRef = useRef() // referencia a un elemento del DOM sin selectores
  
  useEffect(() => {
    let observer = null     

    // callback que se ejecuta cuando el componente observado cambie
    // entries: todas las entras que se están observados (pueden ser varios)
    const onChange = (entries, observer) => {
      const el = entries[0] // solo estamos usando un elemento      

      if (el.isIntersecting) {
        setShow(true)
        observer.disconnect() // deshabilitar el observer para que no siga saltando
      }
    }

    // para dar soporte a los navegadores que no tienen IntersectionObserver (IE11)
    // pedimos la libreria npm solo si la necesitamos (si lo ponemos arriba la pedirá siempre)
    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')         
    ).then(() => {
      // nos permitira hacer un lazyloading del componente
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance // a la distancia de 100px detectará la inteseccion con viewport
      })

      // observar el elemento que deseamos vigilar
      // pasamos el elemento referenciado de userRef
      observer.observe(fromRef.current)
    })    

    // devolvemos la desconexion para que cuando el componente se deje de usar se limpie el evento
    // se ecita por ejemplo que se ejecute el setShow cuando el componente
    return () => observer && observer.disconnect()
  })

  return {isNearScreen, fromRef} 
}