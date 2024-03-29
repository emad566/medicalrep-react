import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const [login, setLogin] = useState(JSON.parse(localStorage.getItem("login")) ? JSON.parse(localStorage.getItem("login")) : false);
  const [authenticated, setAuthenticated] = useState(false);
  const token = localStorage.getItem('token') ?? ""; 


  useEffect(() => {
    setAuthenticated(JSON.parse(localStorage.getItem("authenticated")));
    localStorage.setItem("authenticated", authenticated);
    setLogin(JSON.parse(localStorage.getItem("login")));
  }, [setLogin]);

  return token != ""  ? <Outlet /> : <Navigate exact to={`${process.env.PUBLIC_URL}/login`} />;
};

export default PrivateRoute;
