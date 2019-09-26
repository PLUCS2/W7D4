import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'; 
import { fetchAllPokemon } from './util/api_util'; 
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import { selectAllPokemon } from './reducers/selectors'; 
import { HashRouter, Route } from 'react-router-dom'; 
import Root from './components/root'; 

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  // window.store = configureStore();

  // window.fetchAllPokemon = fetchAllPokemon; 
  // window.receiveAllPokemon = receiveAllPokemon;
  // window.requestAllPokemon = requestAllPokemon;
  // window.selectAllPokemon = selectAllPokemon;

  // window.getState = store.getState; 
  // window.dispatch = store.dispatch; 
  ReactDOM.render(< Root store={configureStore()} />, rootEl);
});