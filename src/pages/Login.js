import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const {isAuthenticated, loginWithRedirect, logout, user, isLoading} = useAuth0();

  return (
    <React.Fragment>
      <h2>Login</h2>
      <button onClick={loginWithRedirect}>login / sign up</button>
    </React.Fragment>
  )
}
export default Login;