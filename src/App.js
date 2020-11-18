import './App.css';

import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Details from './pages/Details'

import { Link, Route } from "wouter";


export default function App() { 
  return (
    <div className="App">
      <section className="App-content"> 
        <Link to="/">Logo</Link>
        <Route path='/' component={Home} />
        <Route path='/search/:keyword' component={SearchResults} />
        <Route path='/gif/:id' component={Details} />
      </section>
    </div>
  );
}
