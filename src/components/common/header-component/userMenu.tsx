import { Fragment, useEffect, useState } from "react";
import { LogOut } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AppLangKeys from "../../../localization/AppLangKeys";
import AppCaches from "../../../constant/AppCaches";
import { toast } from "react-toastify";
import { apiPost } from "../../../api/http";
import Routes from "../../../constant/Routes";
import AppPaths from "../../../constant/AppPaths";

const UserMenu = () => {
  const [_, setProfile] = useState<any>("");
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    setProfile(localStorage.getItem("profileURL"));
  }, []);

  const Logout = async () => {

    const responseJson = await apiPost(Routes.LOGOUT);
    if (responseJson.status) {
      toast.success(responseJson.message)
    } else {
      toast.error(responseJson.message);
    }
    localStorage.clear();
    navigate(`${AppPaths.login}`);
  };

  const loginData = JSON.parse(localStorage.getItem(AppCaches.loginData) ?? '')

  return (
    <Fragment>
      <li className="onhover-dropdown">
        <div className="d-flex align-items-center">
          <img className="align-self-center pull-right img-50 rounded-circle blur-up lazyloaded" width={100} src={loginData?.image} alt="header-user" />
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
            <Link to={`${AppPaths.settings}`}>
              {/* <Settings /> */}
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
