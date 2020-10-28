import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { useAuth } from '../hooks/auth';
import { getToken } from './common';

// handle the private routes
const PrivateRoute = ({ isPrivate =false, component: Component, ...rest }) => {

  return (
    <Route
      {...rest}
      render={(props) => !getToken() ? <Component {...props} /> : <Redirect to={{ pathname:isPrivate ? '/dang-nhap': '/', state: { from: props.location } }} />}
    />
  )
}

export default PrivateRoute;