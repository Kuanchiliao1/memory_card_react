export default function ScoreBoard({currentScore, bestScore, setBestScore}) {
  if (currentScore > bestScore) {
    setBestScore(currentScore)
  }

  return (<>
    <p>{`Current: ${currentScore}`}</p>
    <p>{`Best: ${bestScore}`}</p>
  </>)
}