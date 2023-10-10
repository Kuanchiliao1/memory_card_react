import { useEffect, useState } from "react";
import scrambleArray from "../utils"

export default function Card({index, useCards}) {
  const [url, setUrl] = useState('');

  function shuffleCards() {
    useCards(prevCards => scrambleArray(prevCards))
  }

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${index +1}`)
    .then(response => response.json())
    .then(data => {
      setUrl(data.sprites.front_default);
      console.log(data.sprites.front_default);
    });
  })

  return (
    <div onClick={shuffleCards} className="card">
      <h1>Card</h1>
      <img src={url} alt="" />
    </div>
  )
}