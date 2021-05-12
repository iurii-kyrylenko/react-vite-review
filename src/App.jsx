import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// const Lazy = React.lazy(() => import('./components/Lazy'));
const Lazy = React.lazy(async () => {
  await new Promise(resolve => {
    setTimeout(() => resolve(), 1000)
  })
  return import('./components/Lazy')
});

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/lazy">Lazy</Link>
      </div>
      <hr />
      <Switch>
        <Route exact path="/">
          HOME
        </Route>
        <Route path="/lazy">
          <Suspense fallback={<div>Loading...</div>}>
            <Lazy />
          </Suspense>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
