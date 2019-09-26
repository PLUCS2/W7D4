import { connect } from 'react-redux'; 
import { requestAllPokemon } from '../../actions/pokemon_actions';
import PokemonIndex from './pokemon_index';
import { selectAllPokemon } from '../../reducers/selectors'

const mapStateToProps = state => {
  // const { pokemon } = state.entities; 
  return {
    pokemon: selectAllPokemon(state), //instructions was asking us to use selector
  }
}


const mapDispatchToProps = dispatch => {
  // debugger
  return {
    requestAllPokemon: () => dispatch(requestAllPokemon()) //needs to return a func. was returning an object
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);