import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.css';

const Home = props => (

  <div className="mainBox">
    <h1>When am I ever going to use math?</h1>
    <img src="http://throughthefencebaseball.com/wp-content/uploads/2013/10/baseball-and-stats2.jpg" />
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