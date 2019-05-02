import React, {Component} from 'react';
import '../App.css';
// import { connect } from 'react-redux'

class PreviousLocations extends Component {
  constructor() {
    super()

    this.state = {
      locations: []
    }
  }

  handleLocationUpdate = (e) => {
    this.setState({
      [e.target.location]: e.target.value
    })
  }

render(){
  return (
    <div>
    <a className="pltooltips" href="#"><span>View Previous Locations</span><img className="previouslocations" src="map.svg" alt="Update Location" /></a>
    </div>
  )
 }
}

export default PreviousLocations;
