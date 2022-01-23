import {Component} from 'react'
import HistoryItem from '../HistoryItem'
import './index.css'

class HistoryList extends Component {
  initialHistoryList = [
    {
      id: 0,
      timeAccessed: '07:45 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
      title: 'Instagram',
      domainUrl: 'instagram.com',
    },
    {
      id: 1,
      timeAccessed: '05:45 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
      title: 'Twitter. It’s what’s happening / Twitter',
      domainUrl: 'twitter.com',
    },
    {
      id: 2,
      timeAccessed: '04:35 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
      title: 'Facebook – log in or sign up',
      domainUrl: 'facebook.com',
    },
    {
      id: 3,
      timeAccessed: '04:25 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
      title: 'LinkedIn: Log In or Sign Up',
      domainUrl: 'linkedin.com',
    },
    {
      id: 4,
      timeAccessed: '04:00 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
      title: 'Hashnode: Everything you need to start blogging as a developer!',
      domainUrl: 'hashnode.com',
    },
    {
      id: 5,
      timeAccessed: '03:25 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
      title: 'GitHub: Where the world builds software · GitHub',
      domainUrl: 'github.com',
    },

    {
      id: 6,
      timeAccessed: '02:45 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
      title: 'React – A JavaScript library for building user interfaces',
      domainUrl: 'reactjs.org',
    },
    {
      id: 7,
      timeAccessed: '01:25 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
      title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
      domainUrl: 'stackoverflow.com',
    },

    {
      id: 8,
      timeAccessed: '09:25 AM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
      title: 'Gmail',
      domainUrl: 'mail.google.com',
    },
    {
      id: 9,
      timeAccessed: '09:00 AM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
      title: 'Google',
      domainUrl: 'google.com',
    },
  ]

  state = {searchInput: '', historyItems: this.initialHistoryList}

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
    // const {initialHistoryList} = this.props
    // const {timeAccessed, logoUrl, title, domainUrl} = initialHistoryList
    const {searchInput, historyItems} = this.state

    const searchResult = historyItems.filter(histroyItem =>
      histroyItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const renderHistoryView = () => {
      if (searchResult.length === 0)
        return (
          <div>
            <p>There is no history to show</p>
          </div>
        )

      return (
        <ul className="history-list">
          {searchResult.map(item => (
            <HistoryItem
              key={item.id}
              details={item}
              deleteHistoryItem={this.deleteHistoryItem}
            />
          ))}
        </ul>
      )
    }

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

        <div>{renderHistoryView()}</div>
      </div>
    )
  }
}

export default HistoryList
