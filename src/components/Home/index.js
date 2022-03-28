import React from "react";
import axios from "axios";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setPokemons,
  deletePokemons,
  deletePokemon,
} from "../../reducers/pokemons/actions";

// deleteAll, deleteone, Update , save next in the
export const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return { pokemons: state.pokemonsReducer.pokemons };
  });
  //   const [next, setNext] = useState("");

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
      // console.log(res);
      // console.log(`res.data.next =${res.data.next}`);
      const action = setPokemons(res.data.results);
      dispatch(action);
    });
  }, []);

  //   const handleNextPageBtn = () => {
  //     axios.get(next).then((res) => {
  //       const action = setNext(res.data.next);
  //       dispatch(action);
  //     });
  //   };

  const handleDelete = () => {
    const action = deletePokemon(state.pokemons);
    dispatch(action);
  };
  const handleDeleteAll = () => {
    const action = deletePokemons();
    dispatch(action);
  };

  return (
    <div>
      {state.pokemons.map((pokemon) => {
        return (
          <div>
            <li>{pokemon.name}</li>
            <button onClick={handleDelete}>Delete</button>
          </div>
        );
      })}
      {/* <button onClick={handleNextPageBtn}> Next </button> */}
      <button onClick={handleDeleteAll}>DELETE ALL </button>
    </div>
  );
};
