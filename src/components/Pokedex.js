import React from "react";

const Pokedex = (props) => {
  const { pokemons, loading } = props;
  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        <div>Pageno:</div>
      </div>
      {loading ? (
        <div>The Beast, is loadind safely ....</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons.map((pokemon, index) => {
            return;
            <div>
              <div> Name: {pokemon.name} </div>
              <img alt={pokemon.name} src={pokemon.url} />
            </div>;
          })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
