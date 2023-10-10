import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ScoreBoard from "./components/ScoreBoard";
import Card from "./components/Card";
import CardContainer from "./components/CardContainer";

function App() {
  const [cards, setCards] = useState([{used: false, id: 1}, {used: false, id: 2}, {used: false, id: 3}, {used: false, id: 4}, {used: false, id: 5}, {used: false, id: 10}])

  return (
    <>
      <Header>
        <ScoreBoard></ScoreBoard>
        <h1>Pokemon Memory Cards</h1>
        <h1>{cards}</h1>
      </Header>
      <CardContainer>
        {cards.map((card) => (<Card used={card.used} setCards={setCards} index={card.id} />))}
      </CardContainer>
    </>
  );
}

export default App;
