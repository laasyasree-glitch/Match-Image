const ScoreBoard = props => {
  const {score} = props

  return (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
      />
      <h1>Your Score</h1>
      <p>{score}</p>
    </div>
  )
}

export default ScoreBoard
