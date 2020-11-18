// estilos 
import './App.css';

// Páginas
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'

// Contextos
import StaticContext from './context/StaticContext'
import {GifsContextProvider} from './context/GifsContext'

// Librería para rutas
import { Link, Route } from "wouter";


export default function App() { 
  const contextValue = {
    name: 'Inma',
    country: 'Spain'
  }
  return (
    // permitimos que toda la app tenga acceso al contexto
    <StaticContext.Provider value={{contextValue}}> 
      <div className="App">
        <section className="App-content"> 
          <Link to="/">Logo</Link>

          {/* context solo para las rutas con los gifs*/ }
          <GifsContextProvider>
            <Route path='/' component={Home} />
            <Route path='/search/:keyword' component={SearchResults} />
            <Route path='/gif/:id' component={Detail} />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}
