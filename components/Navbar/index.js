import './index.css'

const Navbar = props => {
  const {Score, Time} = props

  const classNameForTime = Time <= 10 ? 'score-time urgent' : 'score-time'
  return (
    <nav className="navbar">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
      />
      <ul className="score-timer-container">
        <li className="timer-container">
          <p className="heading-text">
            Score: <span className="score-time">{Score}</span>
          </p>
        </li>
        <li className="timer-container">
          <img
            className="timer-image"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p className={classNameForTime}>{Time} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
