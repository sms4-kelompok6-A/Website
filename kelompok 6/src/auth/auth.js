import React, { createContext, useState, useContext } from 'react'

const authContext = createContext(null)

export function ProvideAuth({ children }){
    const [user, setUser] = useState(null)

    const login = (user) => {
        setUser(user)
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <authContext.Provider  value={{user, login, logout}}>
            { children }
        </authContext.Provider>
    )
}

export function useAuth(){
    return useContext(authContext)
}