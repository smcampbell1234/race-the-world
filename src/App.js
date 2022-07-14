import React from 'react';
import './App.css';
import {
  AuthWrapper,
  Dashboard,
  Error,
  Login,
  PrivateRoute,
} from "./pages/index"
//components
import Navbar from "./components/Navbar.js"
import {useUserContext} from "./context/context"
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  let {user} = useUserContext();

  return (
    <AuthWrapper>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }/>
          <Route path='login' element={<Login />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </AuthWrapper>
  );
}

export default App;
