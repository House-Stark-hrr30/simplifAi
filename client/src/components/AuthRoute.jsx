// === import node modules
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to="/" />}
    />
  )
}

export default AuthRoute;