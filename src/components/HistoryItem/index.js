import './index.css'

const HistoryItem = props => {
  const {details, deleteHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = details

  const onDelete = () => {
    deleteHistoryItem(id)
  }

  return (
    <li>
      <div className="history-item">
        <p>{timeAccessed}</p>
        <div className="image-and-url">
          <img className="domain-logo" src={logoUrl} alt="domain logo" />
          <p>{title}</p>
          <p>{domainUrl}</p>
        </div>
        <button
          testid="delete"
          className="delete-button"
          type="button"
          onClick={onDelete}
        >
          <img
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
