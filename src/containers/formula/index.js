
import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Formula = props => (
  <div>
    <h1>Question</h1>
    <button onClick={() => props.changePage()}>Try it out!</button>
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/instructions')
}, dispatch)

export default connect(
  null, 
  mapDispatchToProps
)(Formula)