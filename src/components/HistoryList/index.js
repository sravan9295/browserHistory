import {Component} from 'react'
import HistoryItem from '../HistoryItem'
import './index.css'

class HistoryList extends Component {
  state = {searchInput: '', historyItems: ''}

  onSearchInputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  // how can i access props here , so that i can set it to state and modify it when the
  // deleteHistoryItem is called

  deleteHistoryItem = id => {
    const {historyItems} = this.state
    const filteredHistoryItems = historyItems.filter(item => item.id !== id)
    this.setState({historyItems: filteredHistoryItems})
  }

  render() {
    const {initialHistoryList} = this.props
    // const {timeAccessed, logoUrl, title, domainUrl} = initialHistoryList
    const {searchInput} = this.state

    const searchResult = initialHistoryList.filter(histroyItem =>
      histroyItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="navbar">
          <img
            className="app-logo"
            alt="app logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          />
          <div className="search-container">
            <img
              className="search-icon"
              alt="search"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            />
            <input
              onChange={this.onSearchInputChange}
              type="search"
              value={searchInput}
              placeholder="Search history"
            />
          </div>
        </div>

        <div>
          <ul className="history-list">
            {searchResult.map(item => (
              <HistoryItem
                key={item.id}
                details={item}
                deleteHistoryItem={this.deleteHistoryItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default HistoryList
