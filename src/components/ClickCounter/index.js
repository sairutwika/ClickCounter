import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => {
      console.log(`previous state value:${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="counter-container">
        <h1 className="counter-heading">
          The button has been clicked
          <p className="counter-value">{count}</p>
          times
        </h1>
        <p className="description">Click the button to increase</p>
        <div className="button-container">
          <button type="button" className="button" onClick={this.onIncrement}>
            Click me
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
