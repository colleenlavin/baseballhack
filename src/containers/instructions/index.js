import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Instructions = props => (
  <div className="container">
    <h1>How to play:</h1>
    <h2>1. Type the name of your MLB pitcher. </h2>
    <h2>2. Calculate the answer to each question using the formula sheet.</h2> 
    <h2>3. Enter your answer in the search box and click submit!</h2> 
    <h2>4. Click next to go to the next question. </h2> 
    <button onClick={() => props.changePage()}>Play Ball!</button>
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/quiz')
}, dispatch)

export default connect(
  null, 
  mapDispatchToProps
)(Instructions)
