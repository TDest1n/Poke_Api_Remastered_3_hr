import React, { useState } from "react";
import { searchPokemon } from "react";

const Searchbar = (props) => {
  const { onSearch } = props;
  const [search, setSearch] = useState("ditto");

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  // const onButtonClickHandler: () => void
  const onButtonClickHandler = () => {
    console.log("pokemon:", search);
    // onSearch[search];
  };

  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    console.log("pokemon", result);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Select pokemon" onChange={onChangeHandler} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onButtonClickHandler}>Search</button>
      </div>
    </div>
  );
};

export default Searchbar;
