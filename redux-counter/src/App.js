import React, {Component} from 'react';
import './App.css';
import DisplayCounter from './DisplayCounter'
import Counter from './Counter'

class App extends Component {

  render() {
    return (
      <div className="counterbox">
        <h1 className="countertitle">Redux Counter</h1>
        <DisplayCounter />
        <Counter />
      </div>
    )
  }

}

export default App;
