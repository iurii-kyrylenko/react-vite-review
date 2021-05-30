import React, { Suspense } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
// const Lazy = React.lazy(() => import('./components/Lazy'));
const Lazy = React.lazy(async () => {
  await new Promise(resolve => {
    setTimeout(() => resolve(), 1000)
  })
  return import('./components/Lazy')
});
import CompoundComponent from "./patterns/compound-component/Usage";
import ControlProps from "./patterns/control-props/Usage";

function App() {
  return (
    <Router>
      <div>
        <StyledNavLink exact to="/">Home</StyledNavLink>
        {" • "}
        <StyledNavLink to="/lazy">Lazy</StyledNavLink>
        {" • "}
        <StyledNavLink to="/compound-component">Compound Component</StyledNavLink>
        {" • "}
        <StyledNavLink to="/control-props">Control Props</StyledNavLink>
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
        <Route path="/compound-component">
          <CompoundComponent />
        </Route>
        <Route path="/control-props">
          <ControlProps />
        </Route>
      </Switch>
    </Router>
  )
}

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: gray;
  &.active {
    color: black;
  }
`;

export default App
