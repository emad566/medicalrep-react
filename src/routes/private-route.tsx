import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AppPaths from "../constant/AppPaths";

const PrivateRoute = () => {
  const [_, setLogin] = useState<any>(JSON.parse(`${localStorage.getItem("login")}`) ? JSON.parse(`${localStorage.getItem("login")}`) : false);
  const [authenticated, setAuthenticated] = useState<any>(false);
  const token = localStorage.getItem('token') ?? ""; 


  useEffect(() => {
    setAuthenticated(JSON.parse(`${localStorage.getItem("authenticated")}`));
    localStorage.setItem("authenticated", authenticated);
    setLogin(JSON.parse(`${localStorage.getItem("login")}`));
  }, [setLogin]);

  return token != ""  ? <Outlet /> : <Navigate  to={AppPaths.login} />;
};

export default PrivateRoute;
