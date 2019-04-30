import React, {Component} from 'react'
import { connect } from 'react-redux'
import './Counter.css';

class Counter extends Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div>
      <h1 className="counterdisplay">{this.props.ctr}</h1>
      <button className="button" onClick={() => this.props.onIncrementCounter()}>Add by 1</button>
      <button className="button" onClick={() => this.props.onDecrementCounter()}>Subtract by 1</button>
      <button className="button" onClick={() => this.props.onAddCounter()}>Add by 10</button>
      <button className="button" onClick={() => this.props.onSubCounter()}>Subtract by 10</button>
      <button className="button" onClick={() => this.props.onMultCounter()}>Multiply by 10</button>
      <button className="button" onClick={() => this.props.onDivCounter()}>Divide by 10</button>
      <button className="resetbutton" onClick={() => this.props.onResetCounter()}>RESET</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({type: 'INC_COUNTER'}),
    onDecrementCounter: () => dispatch ({type: 'DEC_COUNTER'}),
    onAddCounter: () => dispatch({type: 'ADD_COUNTER', value: 10}),
    onSubCounter: () => dispatch({type: 'SUB_COUNTER', value: 10}),
    onMultCounter: () => dispatch({type: 'MULT_COUNTER', value: 10}),
    onDivCounter: () => dispatch({type: 'DIV_COUNTER', value: 10}),
    onResetCounter: () => dispatch({type: 'RES_COUNTER', value: 0})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
