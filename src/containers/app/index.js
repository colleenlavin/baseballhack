
import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Instructions from '../instructions'
import Formula from '../formula'
import Quiz from '../quiz'
import Results from '../results'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
      <Link to="/instructions">Instructions</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/instructions" component={Instructions} />
      <Route exact path="/formula" component={Formula} />
      <Route exact path="/quiz" component={Quiz} />
      <Route exact path="/results" component={Results} />

    </main>
  </div>
)
export default App