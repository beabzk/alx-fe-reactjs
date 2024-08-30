import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", "true");

    // If the user was redirected to login from another page, send them back to that page.
    // Otherwise, send them to the home page.
    const from = location.state?.from?.pathname || "/";
    navigate(from, { replace: true });
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;
