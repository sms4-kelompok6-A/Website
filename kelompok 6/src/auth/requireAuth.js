import { Redirect } from "react-router-dom"
import { Route } from "react-router-dom"
import { useAuth } from "./auth"
import React from "react"

export function RequireAuth({ children, ...rest }){
    const auth = useAuth()

    return (
        <Route 
            {...rest}
            render={({ location }) =>
        auth.user ? (
            children
        ) : (
            <Redirect
                to={{
                    pathname: '/login',
                    state: { from: location }
                }}
            />
        )}
        />
    )
}