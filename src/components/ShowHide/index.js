import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {showFirstName: false, showLastName: false}

  showFirstName = () => {
    this.setState(prevState => ({showFirstName: !prevState.showFirstName}))
  }

  showLastName = () => {
    this.setState(prevState => ({showLastName: !prevState.showLastName}))
  }

  render() {
    const {showFirstName, showLastName} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button
              className="button"
              type="button"
              onClick={this.showFirstName}
            >
              Show/Hide Firstname
            </button>
            {showFirstName && <p className="show-name-container">Joe</p>}
          </div>
          <div className="name-container">
            <button
              className="button"
              type="button"
              onClick={this.showLastName}
            >
              Show/Hide Lastname
            </button>
            {showLastName && <p className="show-name-container">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
