import { useEffect, useState } from "react";
import scrambleArray from "../utils"

export default function Card({used, index, setCards}) {
  const [url, setUrl] = useState('');
  const [pokemon, setPokemon] = useState('');

  function shuffleCards() {
    setCards(prevCards => scrambleArray(prevCards))
  }

  function markCard() {
    setCards(prevCards => {
      const targetCard = {used: true, id: index}
      const otherCards = prevCards.filter(card => card.id !== index)
      return [...otherCards, targetCard]
    })
  }

  function resetCards() {
    setCards(prevCards => {
      return prevCards.map(card => ({id: card.id, used: false}))
    })
  }

  function handleClick() {
    shuffleCards()
    used ? resetCards() : markCard()
  }

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${index +1}`)
    .then(response => response.json())
    .then(data => {
      setUrl(data.sprites.front_default);
      setPokemon(data.name[0].toUpperCase() + data.name.slice(1))
    });
  })

  return (
    <div onClick={handleClick} className="card">
      <h1>{pokemon}</h1>
      <img src={url} alt="" />
    </div>
  )
}