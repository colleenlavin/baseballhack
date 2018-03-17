import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Instructions = props => (
  <div className="container">
    <h1>How to play:</h1>
    <h2>1</h2>
    <h2>2</h2>
    <h2>3</h2>    
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
