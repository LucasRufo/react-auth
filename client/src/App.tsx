import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainContainer from "./components/MainContainer";

import Index from "./pages/Index"

function App() {
  return (
    <MainContainer>
      <Router>
        <Switch>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </Router>
    </MainContainer>
  )
}

export default App
