import { lazy, Suspense } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

const Home = lazy(() => import('./views/Home'))
const Page = lazy(() => import('./views/Page'))

const App = () => (
  <Suspense fallback={<div>Loading…</div>}>
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>, <Link to="/page">Page</Link>
        <div>
          <Switch>
            <Route component={Home} exact path="/" />
            <Route component={Page} exact path="/page" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  </Suspense>
)

export default App
