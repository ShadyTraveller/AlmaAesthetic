import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './style.css'
import Book from './views/book'
import Treatments from './views/treatments'
import CosmeticConsultation from './views/cosmetic-consultation'
import Home from './views/home'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Book} exact path="/book" />
        <Route component={Treatments} exact path="/treatments" />
        <Route
          component={CosmeticConsultation}
          exact
          path="/cosmetic-consultation"
        />
        <Route component={Home} exact path="/" />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
