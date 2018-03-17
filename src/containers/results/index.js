
import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Results = props => (
  <div>
    <h1>Congratulations</h1>
    <h2>You've Earned</h2>
    <h3>300 points!!!</h3>
    <button onClick={() => props.changePage()}>Play Again</button>
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/')
}, dispatch)

export default connect(
  null, 
  mapDispatchToProps
)(Results)
