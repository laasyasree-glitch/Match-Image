const timeInterval = () => {
  const {isTimerRunning} = this.state
  if (isTimerRunning) {
    this.timerID = setInterval(this.incrementTimeElapsedInSeconds, 1000)
  } else {
    clearInterval(this.timerID)
  }
}

const incrementTimeElapsedInSeconds = () => {
  const {initialTime} = this.state

  if (initialTime === 0) {
    this.setState(prevState => ({isTimerRunning: !prevState.isTimerRunning}))
    clearInterval(this.timerID)
  } else {
    this.setState(prevState => ({
      initialTime: prevState.initialTime - 1,
    }))
  }
}

export default timeInterval
