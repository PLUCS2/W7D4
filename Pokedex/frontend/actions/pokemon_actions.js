import * as APIUtil from '../util/api_util'
export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON"; 
export const RECEIVE_POKEMON = "RECEIVE_POKEMON"

export const receiveAllPokemon = function(pokemon) {
  return {
    type: RECEIVE_ALL_POKEMON, 
    pokemon
  }
}

export const receivePokemon = function({pokemon, items}) {
  return {
    type: RECEIVE_POKEMON,
    pokemon,
    items
  }
}

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon().then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

export const requestSinglePokemon = (id) => (dispatch) => (
  APIUtil.fetchPokemon(id).then(payload => dispatch(receivePokemon(payload)))
)