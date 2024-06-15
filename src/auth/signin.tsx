import { useState, useEffect, useMemo } from "react";
import logo from "../assets/images/logo.png";
import man from "../assets/images/user/1.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import authVideo from "../assets/video/auth-bg.mp4";
import comingsoon from "../assets/images/other-images/coming-soon-bg.jpg";

import { useNavigate } from "react-router-dom";
import { loginTenant } from "../api/http";
import AppLangKeys from "../localization/AppLangKeys";
import { useTranslation } from "react-i18next";
import AppCaches from "../constant/AppCaches";
import AppPaths from "../constant/AppPaths";
import CustomLoadingSpinner from "../app-components/CustomLoadingSpinner";

const Signin = () => {
  const { t } = useTranslation();
  const searchParams = new URLSearchParams(window.location.search);
  const [isRedirect, setIsRedirect] = useState<any>(true);
  const navigate = useNavigate();

  useMemo(() => {
    const id = searchParams.get("id") ?? "";
    const customerId = searchParams.get("customer") ?? "";

    if (id != "" && customerId != "") {
      localStorage.setItem(AppCaches.token, id);
      localStorage.setItem(AppCaches.customer, customerId);
      navigate(AppPaths.home);

    } else {
      setIsRedirect(false);
    }
  }, []);

  const [isFetching, setisFetching] = useState<any>(false);

  const [customer, setCustomer] = useState<any>("");
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");



  const value = localStorage.getItem("profileURL" || man);

  useEffect(() => {
    if (value !== null) localStorage.setItem("profileURL", value);
    else localStorage.setItem("profileURL", man);
  }, [value]);

  const loginAuth = async () => {
    if (customer.length < 1 || email.length < 1 || password.length < 1) {
      toast.error(t(AppLangKeys.pleaseInsertAllRequiredInputs));
      return;
    }
    setisFetching(true);
    const responseJson = await loginTenant(customer, email, password);
    if (responseJson.status) {
      localStorage.setItem(AppCaches.login, 'true');
      localStorage.setItem(AppCaches.token, responseJson.data.access_token);
      localStorage.setItem(AppCaches.customer, responseJson.data.customer);
      localStorage.setItem(AppCaches.loginName, responseJson.data.current_login_name);
      localStorage.setItem(
        AppCaches.role_type,
        responseJson.data.user_role
      );
      localStorage.setItem(AppCaches.role, responseJson.data.user_role);
      localStorage.setItem(
        AppCaches.loginData,
        JSON.stringify({ ...responseJson.data, authPermission: {} })
      );
      localStorage.setItem(
        AppCaches.authPermissions,
        JSON.stringify(responseJson.data.Auth_Permission)
      );

      navigate(AppPaths.home);
    } else {
      toast.error(responseJson.message);
    }
    setisFetching(false);
  };

  if (isRedirect) return <CustomLoadingSpinner />;

  return (
    <div>
      <div className="page-wrapper" style={{ overflow: "hidden" }}>
        <div className="container-fluid p-0">
          <div className="auth-bg-video">
            <video
              id="bgvid"
              poster={comingsoon}
              playsInline={true}
              autoPlay={true}
              muted={true}
              loop={true}
            >
              <source src={authVideo} type="video/mp4" />
            </video>

            {/* <!-- login page start--> */}
            <div className="authentication-box">
              <div className="row">
                <div className="col-md-12">
                  <div className="auth-innerright">
                    <div className="authentication-box">
                      <div className="text-center">
                        <img src={logo} alt="" />
                      </div>
                      <div className="card mt-4 p-50">
                        <div className="card-body">
                          <div className="text-center">
                            <h4>{t(AppLangKeys.LOGIN)}</h4>
                            <h6>
                              {t(AppLangKeys.enterYourUsernameAndPassword)}
                            </h6>
                          </div>
                          <form className="theme-form">
                            <div className="form-group">
                              <label className="col-form-label pt-0">
                                {t(AppLangKeys.Customer)}
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                name="customer"
                                value={customer}
                                onChange={(e) => setCustomer(e.target.value)}
                                placeholder={t(AppLangKeys.Customer)}
                              />
                            </div>

                            <div className="form-group">
                              <label className="col-form-label pt-0">
                                {t(AppLangKeys.YourName)}
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={t(AppLangKeys.YourName)}
                              />
                            </div>
                            <div className="form-group">
                              <label className="col-form-label">
                                {t(AppLangKeys.Password)}
                              </label>
                              <input
                                className="form-control"
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                            </div>
                            {/* <div className="checkbox p-0">
                            <input id="checkbox1" type="checkbox" />
                            <label htmlFor="checkbox1">{RememberMe}</label>
                          </div> */}
                            <div className="form-group form-row mt-3 mb-0 d-grid">
                              {!isFetching && (
                                <button
                                  className="btn btn-primary"
                                  type="button"
                                  onClick={() => loginAuth()}
                                >
                                  {t(AppLangKeys.LOGIN)}
                                </button>
                              )}

                              {isFetching && (
                                <div className="loader-box">
                                  <div
                                    className="loader"
                                    style={{ margin: "auto" }}
                                  >
                                    <div className="line bg-danger"></div>
                                    <div className="line bg-danger"></div>
                                    <div className="line bg-danger"></div>
                                    <div className="line bg-danger"></div>
                                  </div>
                                </div>
                              )}
                            </div>
                            {/* <div className="login-divider"></div>
                          <div className="social mt-3">
                            <div className="form-group btn-showcase d-flex">
                              <button className="btn social-btn btn-fb d-inline-block" type="button" onClick={facebookAuth}>
                                {" "}
                                <i className="fa fa-facebook"></i>
                              </button>
                              <button className="btn social-btn btn-twitter d-inline-block" type="button" onClick={googleAuth}>
                                <i className="fa fa-google"></i>
                              </button>
                              <button className="btn social-btn btn-google d-inline-block" type="button" onClick={twitterAuth}>
                                <i className="fa fa-twitter"></i>
                              </button>
                              <button className="btn social-btn btn-github d-inline-block" type="button" onClick={githubAuth}>
                                <i className="fa fa-github"></i>
                              </button>
                            </div>
                          </div> */}
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
          {/* <!-- login page end--> */}
        </div>
      </div>
    </div>
  );
};

export default Signin;
