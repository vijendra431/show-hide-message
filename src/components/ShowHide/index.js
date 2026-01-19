
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {setfirstMessage: false, setlastMessage: false}

  showFirstMessage = () => {
    const {setfirstMessage} = this.state
    this.setState(prevState => ({
      setfirstMessage: !prevState.setfirstMessage,
    }))
  }

  showLastMessage = () => {
    const {setlastMessage} = this.state
    this.setState(prevState => ({
      setlastMessage: !prevState.setlastMessage,
    }))
  }
  render() {
    const {setfirstMessage, setlastMessage} = this.state

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
