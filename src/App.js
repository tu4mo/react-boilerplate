import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import LoadableComponent from './components/LoadableComponent'

const Home = LoadableComponent(() => import('./views/Home'))
const Page = LoadableComponent(() => import('./views/Page'))

const App = () => (
  <BrowserRouter>
    <div>
      <Link to="/">Home</Link>
      <Link to="/page">Page</Link>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Page} exact path="/page" />
      </Switch>
    </div>
  </BrowserRouter>
)

export default hot(module)(App)
