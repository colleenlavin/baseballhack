
import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Instructions from '../instructions'
import Formula from '../formula'
import Quiz from '../quiz'
import Q1 from '../q1'
import Q2 from '../q1'
import Q3 from '../q1'
import Results from '../results'
import Header from '../header'
import Footer from '../footer'

const App = () => (
  <div>
   <Header/>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/instructions" component={Instructions} />
      <Route exact path="/formula" component={Formula} />
      <Route exact path="/quiz" component={Quiz} />
      <Route exact path="/q1" component={Q1} />
      <Route exact path="/q2" component={Q2} />
      <Route exact path="/q3" component={Q3} />
      <Route exact path="/results" component={Results} />

    </main>
    <Footer />
  </div>
)
export default App