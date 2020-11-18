import React from 'react'

// valor que tiene el contexto si intentamos consumirlo y no tenemos acceso por etiqueta
// una vez usada etiqueta provider tendo que pasarle un valor
const Context = React.createContext({
  name: 'anonymous',
  woman: true
})

export default Context