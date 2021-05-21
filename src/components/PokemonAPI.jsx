import React, { useEffect, useState } from 'react'
import axios from 'axios'



const PokemonAPI = props => {
    const [pokemon, setPokemon] = useState([])
    const onSubmitHandler = e => { 
        e.preventDefault() 
        
    }
    useEffect(() =>
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
            .then(response => {
                setPokemon(response.data.results);
                console.log(response.data.results)
                })
        , [])
    return (
        <form>
            <button onClick={onSubmitHandler}>fetch pokemon</button>
            {
                
            }
            <ul>
                    {pokemon.map((p,id)=> 
                <li key = {id}>
                    {p.name}
                </li>
                    )}
            </ul>
        </form>
    )
}




export default PokemonAPI