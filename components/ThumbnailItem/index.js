const ThumbNailItem = props => {
  const {imageDetails, onClickCheck} = props
  const {id, imageUrl} = imageDetails

  const isMatched = () => {
    onClickCheck(id)
  }

  return (
    <li>
      <button type="button" onClick={isMatched}>
        <img src={imageUrl} alt="thumbnail" />
      </button>
    </li>
  )
}
export default ThumbNailItem
