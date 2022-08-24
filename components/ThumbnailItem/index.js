import './index.css'

const ThumbNailItem = props => {
  const {imageDetails, onClickCheck} = props
  const {id, thumbnailUrl} = imageDetails

  const isMatched = () => {
    onClickCheck(id)
  }

  return (
    <li className="list-2">
      <button className="button" type="button" onClick={isMatched}>
        <img className="image-1" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}
export default ThumbNailItem
