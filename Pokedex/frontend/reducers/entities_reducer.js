import { combineReducers } from 'redux';
import pokemonReducer from './pokemon_reducer';


const entities = combineReducers({
  pokemon: pokemonReducer
});

export default entities; 