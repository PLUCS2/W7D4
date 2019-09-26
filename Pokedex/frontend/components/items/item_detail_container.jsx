import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import ItemDetail from './item_detail'; 



const mapStateToProps = (state, ownProps) => {
  const item = state.entities.items[ownProps.match.params.itemId] || {};
  // debugger
  return {
    item
  }
}


const mapDispatchToProps = dispatch => {
  // debugger
  return {
    // requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id)) //needs to return a func. was returning an object
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);
