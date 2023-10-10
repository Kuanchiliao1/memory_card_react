import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ScoreBoard from "./components/ScoreBoard";
import Card from "./components/Card";
import CardContainer from "./components/CardContainer";

function App() {
  const [cards, useCards] = useState([10,200,300,400,500,600])
  const [usedCards, useUsedCards] = useState([])

  return (
    <>
      <Header>
        <ScoreBoard></ScoreBoard>
        <h1>Pokemon Memory Cards</h1>
        <h1>{cards}</h1>
      </Header>
      <CardContainer>
        {cards.map((index) => (<Card used={false} useCards={useCards} index={index} />))}
      </CardContainer>
    </>
  );
}

export default App;
