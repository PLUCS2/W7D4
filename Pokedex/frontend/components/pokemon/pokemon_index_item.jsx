import React from 'react';
import { Link } from  'react-router-dom'; 

export const PokemonIndexItem = ({poke}) => {
  // debugger
  return (
          <li key={poke.id}>
            < Link to={`/pokemon/${poke.id}`} >
              {poke.name} <img src={poke.image_url} alt={poke.name} width="50px" height="50px"/>
            </Link>
          </li>
        );
}


