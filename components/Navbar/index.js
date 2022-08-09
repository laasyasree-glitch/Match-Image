const Navbar = props => {
  const {Time} = props
  return (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
      />
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          alt="timer"
        />
        <p>{Time} sec</p>
      </div>
    </div>
  )
}
export default Navbar
