const initialState = {
  pokemons: [],
};

const pokemonsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_POKEMONS":
      return { pokemons: payload };

    case "DELETE_POKEMONS":
      return { pokemons: [] };

    case "DELETE_POKEMON":
      return { pokemons: state.pokemons.filter((pokemon) => { return pokemon.id !== payload.id }) };

    default:
      return state;
  }
};

export default pokemonsReducer;
