import {Component} from 'react'
import Navbar from '../Navbar'
import ScoreBoard from '../ScoreBoard'
import TabItem from '../TabItem'
import ThumbNailItem from '../ThumbnailItem'
import './index.css'

class MatchGame extends Component {
  state = {
    initialTime: 60,
    score: 0,
    tabName: 'FRUIT',
    matched: false,
    imageId: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186',
    isGameInProgress: true,
  }

  componentDidMount() {
    this.timeInterval()
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  timeInterval = () => {
    this.timerID = setInterval(this.incrementTimeElapsedInSeconds, 1000)
  }

  incrementTimeElapsedInSeconds = () => {
    const {initialTime} = this.state

    if (initialTime === 0) {
      this.setState({isGameInProgress: false})
      clearInterval(this.timerID)
    } else {
      this.setState({
        initialTime: initialTime - 1,
      })
    }
  }

  formatTime = () => {
    const {initialTime} = this.state

    const Time = initialTime > 9 ? initialTime : `0${initialTime}`

    return `${Time}`
  }

  reset = () => {
    this.setState({
      initialTime: 60,
      score: 0,
      tabName: 'FRUIT',
      matched: false,
      imageId: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186',
      isGameInProgress: true,
    })
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
    return newImage
  }

  onClickCheck = id => {
    const {imageId} = this.state
    if (id === imageId) {
      const newImage = this.questionImage()
      this.setState(prev => ({
        matched: !prev.matched,
        score: prev.score + 1,
        imageId: newImage.id,
      }))
    } else {
      this.setState({matched: false})
    }
  }

  renderList = () => {
    const {imagesList, tabsList} = this.props
    const {imageId} = this.state
    const FilterImagesList = this.getImage()
    const newImage = imagesList.filter(each => each.id === imageId)
    return (
      <div>
        <img src={newImage[0].imageUrl} alt="match" />

        <ul>
          {tabsList.map(eachTab => (
            <TabItem
              key={eachTab.tabId}
              tabDetails={eachTab}
              tabFunction={this.tabFunction}
            />
          ))}
        </ul>
        <ul>
          {FilterImagesList.map(eachImage => (
            <ThumbNailItem
              key={eachImage.id}
              imageDetails={eachImage}
              onClickCheck={this.onClickCheck}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isGameInProgress, score} = this.state
    const Time = this.formatTime()
    return (
      <div>
        <ul>
          <Navbar Time={Time} Score={score} />
        </ul>

        {isGameInProgress ? (
          <div>{this.renderList()}</div>
        ) : (
          <ScoreBoard score={score} reset={this.reset} />
        )}
      </div>
    )
  }
}

export default MatchGame
