import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Q1 = props => (
  <div>
    <h1>Based on Kershaw's 5 last games, what's the pitcher's average strike per game. </h1>
    <input type="text"></input>
    <button onClick={() => props.changePage()}>Next</button>
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/q2')
}, dispatch)

export default connect(
  null, 
  mapDispatchToProps
)(Q1)