import React from 'react'; 

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props); 
  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }


  render() {
    debugger
    const pokemon = this.props.pokemon;

    pokemon.map((poke,idx) => {
      return (
        <li key={idx}>
          {poke.name}
        </li>
      );
    });

    return (<ul>
      {pokemon}
    </ul>)
  }
}

export default PokemonIndex;