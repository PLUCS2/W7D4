import { connect } from 'react-redux'; 
import { requestAllPokemon } from '../../actions/pokemon_actions'
import PokemonIndex from './pokemon_index'

const mapStateToProps = state => {
  const { pokemon } = state.entities; 
  return {
    pokemon: Object.values(pokemon)
  }
}


const mapDispatchToProps = dispatch => {
  return {
    requestAllPokemon: dispatch(requestAllPokemon())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);