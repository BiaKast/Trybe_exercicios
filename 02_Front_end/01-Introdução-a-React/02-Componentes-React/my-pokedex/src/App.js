import './App.css';
import pokemons from './data';
import Pokedex from './pokedex';

function App() {
  return ( <>
  <h1 className='titulo'>Pokedex</h1>
  <Pokedex pokemons = {pokemons}/>
  </>);
}

export default App;
