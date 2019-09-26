

export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon)
}

// export const getItemsForPoke = (state,pokemon) => {
//   pokemon.item_ids
// }

//selectors usually called by container components -> (mapStateToProps)