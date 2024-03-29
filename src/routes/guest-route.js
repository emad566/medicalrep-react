import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const GuestRoute = () => {
  const token = localStorage.getItem('token') ?? ""; 
  return <Outlet />;
  return token == ""  ? <Outlet /> : <Navigate exact to={`${process.env.PUBLIC_URL}/`} />;
};

export default GuestRoute;
