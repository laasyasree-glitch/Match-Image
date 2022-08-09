const Navbar = props => {
  const {Time, Score} = props
  return (
    <li>
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
      />
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          alt="timer"
        />
        <p>Score: {Score}</p>
        <p>{Time} sec</p>
      </div>
    </li>
  )
}
export default Navbar
