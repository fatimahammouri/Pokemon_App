import React from 'react'
import { useState, useEffect } from "react";
import  axios from "axios";
 
export const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon")
        .then((res) => {
            console.log(res)
            setPokemons(res.data.results) 
        })  
    }, []);

    return (
        <div>
            {pokemons.map((pokemon) => {return <li>{pokemon.name}</li>})}
        </div>
    )
}
