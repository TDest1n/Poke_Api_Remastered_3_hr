import React, { useState } from "react";
import { searchPokemon } from "../api";

const Searchbar = () => {
  const [search, setSearch] = useState("ditto");
  const [pokemon, setPokemon] = useState();
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  // const onButtonClickHandler: () => void
  const onButtonClickHandler = () => {
    onSearchHandler(search);
    // onSearch[search];
  };

  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    setPokemon(result);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Select pokemon" onChange={onChangeHandler} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onButtonClickHandler}>Search</button>
      </div>
      {pokemon ? (
        <div>
          <div>Name: {pokemon.name}</div>
          <div> Weight:{pokemon.weight}</div>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      ) : null}
    </div>
  );
};

export default Searchbar;
