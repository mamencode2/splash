import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import SplashLayoutEdited339 from './views/splash-layout-edited339'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={SplashLayoutEdited339} path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
