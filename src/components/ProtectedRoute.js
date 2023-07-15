import React from "react"
import { Route, Navigate } from "react-router-dom"

export default function ProtectedRouteElement( { component: Component, ...props } ) {
  return (
    <Route>
      {
        () => (props.loggedIn ? <Component {...props} /> : <Navigate to='/sign-in' replace/>)
      }
    </Route>
  )
}