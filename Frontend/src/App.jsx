import React from 'react'

import GlobalStyle from './styles/global'

import { ToastContainer } from 'react-toastify'

import Routes from './routes'

// context
import { UserProvider } from './context/UserContext'

function App() {
  return (
    <UserProvider>
      <ToastContainer />
      <GlobalStyle />
      <Routes />
    </UserProvider>
  )
}

export default App
