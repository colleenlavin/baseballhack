
import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Formula = props => (
  <div>
    <h1>How to figure this out</h1>
    <h2>Formula sheet:</h2>
    <h2>Average = sum/n</h2>
    <h2>Interquartile range = Q3 - Q1</h2>
    <h2>Median = ((n + 1)/ 2)th</h2>
    <button onClick={() => props.changePage()}>Next</button>
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/instructions')
}, dispatch)

export default connect(
  null, 
  mapDispatchToProps
)(Formula)