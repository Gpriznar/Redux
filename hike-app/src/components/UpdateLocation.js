import React, {Component} from 'react';
import '../App.css';
// import { connect } from 'react-redux'

class UpdateLocation extends Component {
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
    <a className="ultooltips" href="#"><span>Update Location</span><img className="updatelocation" src="placeholder.svg" alt="Update Location" /></a>
    </div>
  )
 }
}

export default UpdateLocation;
