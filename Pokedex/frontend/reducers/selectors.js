

export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon)
}


//selectors usually called by container components -> (mapStateToProps)