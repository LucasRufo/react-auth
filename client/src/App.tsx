import { createBrowserHistory } from "history";
import {
  BrowserRouter,
  Router,
  Switch,
  Route,
} from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Authenticated from "./pages/Authenticated";

import Index from "./pages/Index"

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <MainContainer>
        <BrowserRouter>
          <Switch>
            <Route path="/authenticated">
              <Authenticated />
            </Route>
            <Route path="/">
              <Index />
            </Route>
          </Switch>
        </BrowserRouter>
      </MainContainer>
    </Router>
  )
}

export default App
