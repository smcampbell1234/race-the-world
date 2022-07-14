import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const {isAuthenticated, loginWithRedirect, logout, user, isLoading} = useAuth0();
  const isUser = isAuthenticated && user;
  console.log({isAuthenticated, user, isLoading})
  return (
    <React.Fragment>
      {isUser && user.picture &&
      <div>user pic</div>
      }
      {isUser && user.name &&
      <h4>
        Welcome, <strong>{user.name.toUpperCase()}</strong>
      </h4>
      }
      {isUser ?
        <button onClick={() => logout({ returnTo: window.location.origin })}>logout</button>
        :
        <button onClick={loginWithRedirect}>login</button>
      }
    </React.Fragment>


  )
}

export default Navbar;