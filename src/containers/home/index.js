import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Home = props => (

  <div className="mainBox">
    <h1>When am I ever going to use math?</h1>
    <p>Placeholder for api data and pitcher Stats</p>
    <button onClick={() => props.changePage()}>What does any of this mean?</button>
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/formula')
}, dispatch)

export default connect(
  null, 
  mapDispatchToProps
)(Home)