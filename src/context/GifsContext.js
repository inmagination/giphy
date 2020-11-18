import React, { useState } from 'react'

const Context = React.createContext({})

// podemos crear nuestro propio provider que es el que tiene el value
// asi dejamos el value en el archivo del contexto y no setearlo
export function GifsContextProvider({children}) {
  const [gifs, setGifs] = useState([]) // para poder tyener acceso a los gifs y poder setearlo

  return <Context.Provider value={{gifs, setGifs}}>
    {children}
  </Context.Provider>
}

export default Context