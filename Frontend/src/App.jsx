import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import GlobalStyle from './styles/global'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import SignUp from './pages/SignUp'


// context

import { UserProvider } from "./context/UserContext"

function App() {
  return (
    <Router>
      <UserProvider>
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
      </UserProvider>
    </Router>
  )
}

export default App
