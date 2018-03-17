import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Q3 = props => (
  <div>
    <h1>Based on the pitcher's 5 last games, what's the pitcher's average strike per game. </h1>
    <input type="text"></input>
    <button onClick={() => props.changePage()}>Next</button>
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/results')
}, dispatch)

export default connect(
  null, 
  mapDispatchToProps
)(Q3)