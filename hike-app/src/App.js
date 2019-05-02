import React, {Component} from 'react';
import './App.css';
import UpdateLocation from './components/UpdateLocation'
import PreviousLocations from './components/PreviousLocations'

class App extends Component {
  render() {
    return (
      <div className="maindiv">
      <h1>Hike Tracker</h1>
      <div className="buttondiv">
      <UpdateLocation />
      <PreviousLocations />
      </div>
      </div>
    )
  }
}

export default App;
