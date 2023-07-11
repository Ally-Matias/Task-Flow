import React, { useContext } from 'react'

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import SignIn from './pages/SignIn'
import Home from './pages/Home'
import SignUp from './pages/SignUp'

import { Context } from './context/UserContext.jsx'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function PrivateRoute({ component: Component, ...rest }) {
  const { authenticated } = useContext(Context)
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? (
          <Component {...props} />
        ) : (
          <>
            {toast.error('Você precisa está logado para acessar essa página!', {
              position: toast.POSITION.TOP_CENTER,
              hideProgressBar: false,
              autoClose: 1000,
            })}
            <Redirect
              to={{ pathname: '/SignIn', state: { from: props.location } }}
            />
          </>
        )
      }
    />
  )
}

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/home" component={Home} />
        <Route path="/SignIn">
          <SignIn />
        </Route>
        <Route path="/SignUp">
          <SignUp />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
