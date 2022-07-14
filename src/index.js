import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ContextProvider} from './context/context'
import {Auth0Provider} from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-17ofl7hj.us.auth0.com"
    clientId="K4wx3esDrnj7FYZhCH4IB4XKRxDNyGdL"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <ContextProvider>
      <App />
    </ContextProvider>
  </Auth0Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
