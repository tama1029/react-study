import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" name="huga" onClick={() => {console.log("click")}}/>
      </React.Fragment>
    )
  }
}
export default App;