import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Navigate, Outlet  } from 'react-router-dom'
console.log('routes.js')
const isAuthenticated = () => {
  //todo jwt token
  return true
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
function Login() {
  return (
    <div>
      <h2>Login</h2>
    </div>
  );
}
function Signup() {
  return (
    <div>
      <h2>SignUp</h2>
    </div>
  );
}
function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
    </div>
  );
}

const RequireAuth = ({ children, ...rest}) => {
  const auth = false; // determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ? children : <Navigate to="/" state={{ from: rest.location }}/>;
}


const RoutesComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/app" element={<RequireAuth><Dashboard /></RequireAuth>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
);

export default RoutesComponent;