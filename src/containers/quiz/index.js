import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Quiz = props => (
  <div>
    <h1> Enter your favorite pitcher's name:</h1>
    <input type="text"></input>
    <button onClick={() => props.changePage()}>Next</button>
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/q1')
}, dispatch)

export default connect(
  null, 
  mapDispatchToProps
)(Quiz)