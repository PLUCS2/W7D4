import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = function(state = {}, action) {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_ALL_POKEMON: {
      // debugger
      return Object.assign({}, action.pokemon)
    }
    case RECEIVE_POKEMON: {
      // debugger
      return Object.assign({},state, {[action.pokemon.id]: action.pokemon})
    }
    default:
      return state;
  }
}

export default pokemonReducer; 