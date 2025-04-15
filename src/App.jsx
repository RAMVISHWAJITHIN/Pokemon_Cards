import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "./components/ PokemonCard";
import SearchBar from "./components/SearchBar";
import "./App.css";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchPokemons = async () => {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
      const promises = res.data.results.map(async (pokemon) => {
        const details = await axios.get(pokemon.url);
        return {
          name: pokemon.name,
          image: details.data.sprites.front_default,
        };
      });
      const results = await Promise.all(promises);
      setPokemons(results);
    };

    fetchPokemons();
  }, []);

  const filtered = pokemons.filter((p) => p.name.includes(search));

  return (
    <div className="app">
      <h1>Pokémon Cards</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <div className="card-container">
        {filtered.map((pokemon) => (
          <PokemonCard key={pokemon.name} name={pokemon.name} image={pokemon.image} />
        ))}
      </div>
    </div>
  );
};

export default App;
