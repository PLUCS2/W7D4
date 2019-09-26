import React from 'react'; 
import { PokemonIndexItem } from './pokemon_index_item'; 
import PokemonDetailContainer from './pokemon_detail_container'; 
import { Route } from 'react-router-dom';
import ItemDetailContainer from '../items/item_detail_container'; 

class PokemonIndex extends React.Component {
  constructor(props) {
    // debugger
    super(props); 
  }

  componentDidMount(){
    // debugger
    this.props.requestAllPokemon();
  }

    componentDidUpdate(){
      // debugger
    }

  render() {
    
    let pokemon = this.props.pokemon; //changed from const to let

    if(pokemon.length < 2 ){
      return <h1>Loading</h1>
    }
    // pokemon = pokemon.map((poke,idx) => { //map returns new array so we have to reassign it
    //   return (
    //     <li key={idx}>
    //       {poke.name} <img src={poke.image_url} alt={poke.name} width="50px" height="50px"/>
    //     </li>
    //   );
    // });]

 

    const pokemonItems = pokemon.map(poke => (
      <PokemonIndexItem key={poke.id} poke={poke} />
    ));

    return (
      <section className="pokedex">
      < Route path="/pokemon/:id" component={PokemonDetailContainer} />
      < Route path="/pokemon/:pokemonId/items/:itemId" component={ItemDetailContainer} />
      <ul>
        {pokemonItems}
      </ul>
    </section>
    )
  }
}

export default PokemonIndex;