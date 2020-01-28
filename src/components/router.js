import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Content from './Content'

const MainRoutes = (routProps) => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" render={((props) => <Content {...props} {...routProps} />)} />
        </Switch>
      </Router>
    </div>
  )
}

export default MainRoutes