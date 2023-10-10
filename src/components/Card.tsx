import { useEffect, useState } from "react";
import scrambleArray from "../utils"

export default function Card({used, index, setCards}) {
  const [url, setUrl] = useState('');

  function shuffleCards() {
    setCards(prevCards => scrambleArray(prevCards))
  }

  function markCard() {
    setCards(prevCards => {
      const targetCard = prevCards.filter(card => card.id === index)[0]
      const otherCards = prevCards.filter(card => card.id !== index)
      targetCard.used = true
      return [...otherCards, targetCard]
    })
  }

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${index +1}`)
    .then(response => response.json())
    .then(data => {
      setUrl(data.sprites.front_default);
    });
  })

  return (
    <div onClick={() => {
        markCard()
        shuffleCards()
      }} className="card">
      <h1>Card</h1>
      {used && <p>used</p>}
      <img src={url} alt="" />
    </div>
  )
}