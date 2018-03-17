import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Quiz = props => (
  <div>
    <h1>Question</h1>
    <h2>Option</h2>
    <h2>Option</h2>
    <h2>Option</h2>
    <h2>Option</h2>
    <button onClick={() => props.changePage()}>Submit</button>
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/results')
}, dispatch)

export default connect(
  null, 
  mapDispatchToProps
)(Quiz)