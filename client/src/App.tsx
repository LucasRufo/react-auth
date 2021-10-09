import { createBrowserHistory } from "history";
import {
  BrowserRouter,
  Router,
  Switch,
  Route,
} from "react-router-dom";
import MainContainer from "./components/MainContainer";

import Index from "./pages/Index"

export const history = createBrowserHistory();

history

function App() {
  return (
    <Router history={history}>
      <MainContainer>
        <BrowserRouter>
          <Switch>
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
