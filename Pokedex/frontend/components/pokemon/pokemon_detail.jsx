import React from 'react';
import { Link } from 'react-router-dom';

class PokemonDetail extends React.Component {
  constructor(props) {
    // debugger
    super(props);
    this.id = props.match.params.id;
    
  
  }

  componentDidMount(){
    this.props.requestSinglePokemon(this.id);
    // debugger
  }

  render(){
    let poke = this.props.pokemon;
    let items = [];
    debugger
    if(Object.keys(this.props.items).length > 0){

      for(var id in this.props.items){
        items.push(
        <li key={id}>
            <Link to={`/pokemon/${poke.id}/items/${id}`}>{this.props.items[id].name}</Link>
        </li>
          )
      }

    }
    // debugger
    // let moves = Object.keys(poke).length === 0 ? "" : poke.moves.join(" ");

    return (
      <>
      <img src={poke.image_url} alt={poke.name}/>
      <h1>{poke.name}</h1>
        <ul key={poke.id}>
          <li>Attack: {poke.attack}</li>
          <li>Defense: {poke.defense}</li>
          <li>Type: {poke.poke_type}</li>
          <li>Moves: {poke.moves}</li>
        </ul>
        <ul>
          {items ? items : ""}
        </ul>
    </>
    )
  }
}

export default PokemonDetail;