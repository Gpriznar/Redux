import React, {Component} from 'react'
import './DisplayCounter.css'
import { connect } from 'react-redux'

class DisplayCounter extends Component {

  render() {
    return (
    <div className="displaycounter">
    <h1 className="counter"> {this.props.MyCounter} </h1>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    myCounter: state.counter
  }
}

export default connect(mapStateToProps)(DisplayCounter)
