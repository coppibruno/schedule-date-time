import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import Appointment from "./pages/appointment";
import SignUp from "./components/SignUp";

function Home() {
  return <h1>Home</h1>;
}
function Login() {
  return (
    <div>
      <h2>Login</h2>
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

const RequireAuth = ({ children, ...rest }) => {
  const auth = true; // determine if authorized, from context or however you're doing it

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return auth ? children : <Navigate to="/" state={{ from: rest.location }} />;
};

const RoutesComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/app"
        element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default RoutesComponent;
