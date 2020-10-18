import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/auth';
// import { getToken } from './common';

// handle the private routes
const PrivateRoute = ({ isPrivate =false, component: Component, ...rest }) => {
  const {token} = useAuth();
  if(isPrivate) {
    return(
      <Route>
        {...rest}
        render={() => {
          return (<p>Loading...</p>)
        }}
      </Route>
    )
  }
  return (
    <Route
      {...rest}
      render={(props) => isPrivate === !!token ? <Component {...props} /> : <Redirect to={{ pathname:isPrivate ? '/dang-nhap': '/', state: { from: props.location } }} />}
    />
  )
}

export default PrivateRoute;