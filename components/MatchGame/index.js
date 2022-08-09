import {Component} from 'react'
import Navbar from '../Navbar'
import ScoreBoard from '../ScoreBoard'
import TabItem from '../TabItem'
import ThumbNailItem from '../ThumbnailItem'

class MatchGame extends Component {
  state = {
    isTimerRunning: true,
    initialTime: 60,
    score: 0,
    tabName: 'FRUIT',
  }

  componentDidMount() {
    const {isTimerRunning} = this.state
    if (isTimerRunning) {
      this.timerID = setInterval(this.incrementTimeElapsedInSeconds, 1000)
    } else {
      clearInterval(this.timerID)
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  incrementTimeElapsedInSeconds = () => {
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

  formatTime = () => {
    const {initialTime} = this.state

    const Time = initialTime > 9 ? initialTime : `0${initialTime}`

    return `${Time}`
  }

  getImage = () => {
    const {imagesList} = this.props
    const {tabName} = this.state
    const filterImages = imagesList.filter(
      eachItem => eachItem.category === tabName,
    )
    return filterImages
  }

  tabFunction = tabId => {
    this.setState({tabName: tabId})
  }

  questionImage = () => {
    const {imagesList} = this.props
    const index = Math.floor(Math.random() * imagesList.length)
    const newImage = imagesList[index]
    return <img src={newImage.imageUrl} alt="match" />
  }

  renderList = () => {
    const {tabsList} = this.props
    const FilterImagesList = this.getImage()

    return (
      <div>
        {this.questionImage()}
        <ul>
          {tabsList.map(eachTab => (
            <TabItem tabDetails={eachTab} tabFunction={this.tabFunction} />
          ))}
        </ul>
        <ul>
          {FilterImagesList.map(eachImage => (
            <ThumbNailItem imageDetails={eachImage} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {initialTime, score} = this.state
    const Time = this.formatTime()
    return (
      <div>
        <Navbar Time={Time} />
        {initialTime > 0 ? (
          <div>{this.renderList()}</div>
        ) : (
          <ScoreBoard score={score} />
        )}
      </div>
    )
  }
}

export default MatchGame
