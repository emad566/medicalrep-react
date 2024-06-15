import { Navigate, Outlet } from "react-router-dom";
import AppCaches from "../constant/AppCaches";
import AppPaths from "../constant/AppPaths";

const GuestRoute = () => {
  const token = localStorage.getItem(AppCaches.token) ?? ""; 
  const customer = localStorage.getItem(AppCaches.customer) ?? ""; 
  return (token == "" || customer == "" )  ? <Outlet /> : <Navigate  to={AppPaths.main} />;
};

export default GuestRoute;
