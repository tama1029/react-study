import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" name="huga" onClick={() => {console.log("click")}}/>
//       </React.Fragment>
//     )
//   }
// }

const App = () => {
  const profiles = [
    { name: "Taro", age: 10},
    { name: "Taro", age: 12},
    { name: "Taro"}
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>{props.name}, and age {props.age}</div>
}

User.defaultProps = {
  age: 1
}
export default App;