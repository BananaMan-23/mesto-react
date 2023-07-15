import React from "react"
import { Route, Navigate } from "react-router-dom"

export default function ProtectedRouteElement( { component: Component, ...props } ) {
  return (
    <Route path="/" element={
      props.loggedIn ? <Component {...props} /> : <Navigate to='/sign-in' replace/>
    }>
      {/* {
        () => (props.loggedIn ? <Component {...props} /> : <Navigate to='/sign-in' replace/>)
      } */}
    </Route>
  )
}