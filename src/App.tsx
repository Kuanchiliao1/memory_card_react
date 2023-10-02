import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ScoreBoard from "./components/ScoreBoard";
import Card from "./components/Card";
import CardContainer from "./components/CardContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header>
        <ScoreBoard></ScoreBoard>
        <h1>Pokemon Memory Cards</h1>
      </Header>
      <CardContainer>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </CardContainer>
    </>
  );
}

export default App;
