import React from 'react';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
// import {PokemonIndexItem} from './pokemon/pokemon_index_item';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom'; 

const Root = ({ store }) => ( //just need to use container inside provider. lecture did App -> Root
  <Provider store={store}>
    <HashRouter> 
      {/* <Switch> */}
        < Route path="/" component={PokemonIndexContainer} />
        {/* < Route path="/pokemon/:id" component={PokemonDetailContainer} /> */}
      {/* </Switch> */}
    </ HashRouter>
  </Provider>
);

export default Root;
