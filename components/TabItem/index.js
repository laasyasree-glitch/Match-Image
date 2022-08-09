const TabItem = props => {
  const {tabDetails, tabFunction} = props
  const {displayText, tabId} = tabDetails

  const idGrabber = () => {
    tabFunction(tabId)
  }

  return (
    <li>
      <button type="button" onClick={idGrabber}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
