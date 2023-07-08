import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import GlobalStyle from './styles/global'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import SignUp from './pages/SignUp'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/SignIn">
          <SignIn />
        </Route>
        <Route path="/SignUp">
          <SignUp />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App