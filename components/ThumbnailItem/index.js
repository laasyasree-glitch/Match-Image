const ThumbNailItem = props => {
  const {imageDetails} = props
  const {imageUrl} = imageDetails

  return (
    <li>
      <img src={imageUrl} alt="thumbnail" />
    </li>
  )
}
export default ThumbNailItem
