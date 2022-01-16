import React from 'react'
import { useState, useEffect } from "react";
import  axios from "axios";

 
export const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [next, setNext] = useState("")


    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon")
        .then((res) => {
            console.log(res)
            console.log(res.data.next)
            setPokemons(res.data.results)
            setNext(res.data.next) 
        })
        .catch(() => {console.log("Error")})
    }, []);

    const handleNextPageBtn = () => {
        alert("clicked the button")
        axios.get(next)
        .then((res) => {
            setNext(res.data.next) 
            setPokemons(res.data.results)
        })
    }

    return (
        <div>
            {pokemons.map((pokemon) => {return <li>{pokemon.name}</li>})}
            <button onClick={handleNextPageBtn}> Next </button>
        </div>
    )
}
