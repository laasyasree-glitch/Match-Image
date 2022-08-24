import './index.css'

const ScoreBoard = props => {
  const {score, reset} = props

  const restart = () => {
    reset()
  }

  return (
    <div className="score-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy"
      />
      <div className="score-board">
        <p>YOUR SCORE: {score}</p>
        <button type="button" onClick={restart}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default ScoreBoard
