
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstMessage: false, lastMessage: false}

  showFirstMessage = () => {
    const {firstMessage} = this.state
    this.setState(prevState => ({
      firstMessage: !prevState.firstMessage,
    }))
  }

  showLastMessage = () => {
    const {lastMessage} = this.state
    this.setState(prevState => ({
      lastMessage: !prevState.lastMessage,
    }))
  }
  render() {
    const {firstMessage, lastMessage} = this.state

    return (
      <div className="app-container">
        <div className="container2">
          <h1 className="heading">Show/Hide Message</h1>
          <div className="message-container">
            <div className="hello-container">
              <button className="button" onClick={this.showFirstMessage}>
                Show/Hide Hello
              </button>
              {firstMessage ? <h2 className="namesShow">Hello</h2> : ''}
            </div>
            <div className="world-container">
              <button className="button" onClick={this.showLastMessage}>
                Show/Hide World
              </button>
              {lastMessage ? <h2 className="namesShow">World</h2> : ''}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
