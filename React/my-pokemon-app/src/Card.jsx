import { useState, useEffect } from "react";

function Card({ name = "Ditto" }) {
  // 1. Create a state to hold the image URL
  const [pokemonImg, setPokemonImg] = useState("");

  // 2. useEffect handles the "Side Effect" of fetching data
  useEffect(() => {
    async function loadData() {
      const format_name = name.toLowerCase();
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${format_name}`
        );
        const data = await response.json();

        // 3. Set the state with the URL
        setPokemonImg(data.sprites.front_shiny);
      } catch (error) {
        console.error("Fetch failed", error);
      }
    }

    loadData();
  }, [name]); // Only re-run if the name changes

  return (
    <div className="card">
      {/* 4. Use the state variable here */}
      <img
        className="card-image"
        src={pokemonImg || "https://via.placeholder.com/150"}
        alt={name}
      />
      <h2 className="card-title">{name}</h2>
      <p className="card-text">Level 100 Martial Artist</p>
    </div>
  );
}

export default Card;
