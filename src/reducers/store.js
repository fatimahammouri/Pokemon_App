import { combineReducers, createStore } from "redux";
import pokemonsReducer from "./pokemons"; 

const reducers = combineReducers({pokemonsReducer})
const store = createStore(reducers);

export default store;