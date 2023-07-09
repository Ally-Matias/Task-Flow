import { createContext } from 'react'

import useAuth from '../hooks/useAuth'

const Context = createContext()

function UserProvider({ children }) {
  const { authenticated, SignUp, logout, login } = useAuth()

  return (
    <Context.Provider value={{ authenticated, SignUp, logout, login }}>
      {children}
    </Context.Provider>
  )
}

export { Context, UserProvider }
