const ScoreBoard = props => {
  const {score, reset} = props

  const restart = () => {
    reset()
  }

  return (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
      />
      <p>YOUR SCORE : {score}</p>
      <button type="button" onClick={restart}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default ScoreBoard
