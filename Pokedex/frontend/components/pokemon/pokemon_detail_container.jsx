import React from 'react';
import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';


const mapStateToProps = (state, ownProps) => {
  const pokemon = state.entities.pokemon[ownProps.match.params.id] || {}; 
  const items = state.entities.items; 
  // debugger
  return {
    pokemon,
    items
  }
}


const mapDispatchToProps = dispatch => {
  // debugger
  return {
    requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id)) //needs to return a func. was returning an object
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
