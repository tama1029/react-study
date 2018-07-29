import React, {Component} from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    this.setState({count: this.state.count + 1})
  }

  handleDecreaseButton = () => {
    this.setState({count: this.state.count - 1})
  }

  render() {
    return (
      <div>
        count: {this.state.count}
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleDecreaseButton}>-1</button>
      </div>
    )
  }
}

export default App;