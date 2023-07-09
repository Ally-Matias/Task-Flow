import {createContext} from 'react'

import useAuth from '../hooks/useAuth'

const Context = createContext()

function UserProvider({children}){
    const { SignUp } = useAuth()

    return(
        <Context.Provider value={{ SignUp }}>{children}</Context.Provider>
    )
}

export { Context, UserProvider}