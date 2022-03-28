
export const setPokemons = (pokemons) => {
  return {
    type: "SET_POKEMONS",
    payload: pokemons,
  };
};

export const deletePokemons = () => {
  return {
    type: "DELETE_POKEMONS",
  };
};

export const deletePokemon = (pokemon) => {
  return {
    type: "DELETE_POKEMON",
    payload: pokemon,
  };
};

// export const setNext = (next) => {
//   return {
//       type: "SET_NEXT",
//       payload: next,
//   };
// };
