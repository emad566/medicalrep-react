import { Suspense, useState } from "react";
import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import configDB from "../data/customizer/config";
import PrivateRoute from "./private-route";
import Signin from "../auth/signin";
import AppLayout from "../components/app";
import { routes } from "./layouts-routes";
import { Loader } from "react-feather";
import GuestRoute from "./guest-route";
import i18n from "../i18n";
import { useDispatch } from "react-redux";
import AppPaths from "../constant/AppPaths";

const MainRoutes = () => {
  const [authenticated, setAuthenticated] = useState<any>(false);

  useEffect(() => {
    const abortController = new AbortController();
    setAuthenticated(JSON.parse(`${localStorage.getItem("authenticated")}`));
    const color = localStorage.getItem("color");
    const layout = localStorage.getItem("layout_version") || configDB.data.color.layout_version;
    document.body.classList.add(layout);
    
    document.getElementById("color")?.setAttribute("href", `${window.location.origin}/assets/css/${color}.css`);

    return function cleanup() {
      abortController.abort();
    };
  }, []);

  const lang = localStorage.getItem('lang')?? "ar";
  
  i18n.changeLanguage(lang);

  const dispatch = useDispatch();
    const handleLayout = (layout: any) => {
        document.querySelectorAll(".main-layout li").forEach((item) => {
            item.classList.remove('active');
        });
        document.body.setAttribute('main-theme-layout', layout);
        document.documentElement.dir = layout;
        dispatch({ type: 'ADD_LAYOUT', payload: layout });
  }
  handleLayout(lang == 'ar'? 'rtl' : 'ltr');

  

  return (
    <>
      <BrowserRouter basename="/">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<PrivateRoute />}>
              { authenticated || true ? (
                <>
                  <Route path={AppPaths.main} element={<Navigate to={AppPaths.home} />} />
                </>
              ) : (
                ""
              )}

              {routes.map(({ path, Component}, i) => (
                <Route element={<AppLayout />} key={i}>
                  <Route path={path} element={Component} />
                </Route>
              ))}
            </Route>

            <Route path='/' element={<GuestRoute />}>
              <Route path={AppPaths.login} element={<Signin />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default MainRoutes;
