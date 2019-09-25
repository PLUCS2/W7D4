import React from 'react';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { requestAllPokemon } from '../actions/pokemon_actions';
import { Provider } from 'react-redux';

const Root = ({ store }) => (
  <Provider store={store}>
    <div>Hello, world!</div>
    < PokemonIndexContainer requestAllPokemon={requestAllPokemon}  />
  </Provider>
);

export default Root;
