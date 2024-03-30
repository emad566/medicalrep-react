import React, { Fragment, useState, useEffect } from "react";
import man from "../../../assets/images/dashboard/user.png";
import { User, Mail, Lock, Settings, LogOut } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import { EditProfile, Inbox, LockScreen } from "../../../constant";
import AppLangKeys from "../../../localization/AppLangKeys";
import { useTranslation } from "react-i18next";

const UserMenu = () => {
  const {t} = useTranslation();
  const [profile, setProfile] = useState("");
  const authenticated = JSON.parse(localStorage.getItem("authenticated"));
  const auth0_profile = JSON.parse(localStorage.getItem("auth0_profile"));
  const navigate = useNavigate();

  useEffect(() => {
    setProfile(localStorage.getItem("profileURL") || man);
  }, []);

  const Logout = () => {
    localStorage.removeItem("profileURL");
    localStorage.removeItem("token");
    localStorage.removeItem("token");

    navigate(`${process.env.PUBLIC_URL}/login`);
  };

  return (
    <Fragment>
      <li className="onhover-dropdown">
        <div className="d-flex align-items-center">
          <img className="align-self-center pull-right img-50 rounded-circle blur-up lazyloaded" src={authenticated ? auth0_profile.picture : profile} alt="header-user" />
          <div className="dotted-animation">
            <span className="animate-circle"></span>
            <span className="main-circle"></span>
          </div>
        </div>
        <ul className="profile-dropdown onhover-show-div p-20 profile-dropdown-hover">
          {/* <li>
            <Link to={`${process.env.PUBLIC_URL}/users/userEdit`}>
              <User />
              {EditProfile}
            </Link>
          </li>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/email-app/emailDefault`}>
              <Mail />
              {Inbox}
            </Link>
          </li>
          <li>
            <a href="#javascript">
              <Lock />
              {LockScreen}
            </a>
          </li> */}
          <li>
            <Link to={`${process.env.PUBLIC_URL}/dashboard/settings`}>
              <Settings />
              {t(AppLangKeys.settings)}
            </Link>
          </li>
          <li>
            <a onClick={Logout} href="#javascript">
              <LogOut /> {t(AppLangKeys.logout)}
            </a>
          </li>
        </ul>
      </li>
    </Fragment>
  );
};

export default UserMenu;
