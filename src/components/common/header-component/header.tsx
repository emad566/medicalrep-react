import { useState, Fragment, useEffect, useLayoutEffect } from 'react';
import Language from './language';
import UserMenu from './userMenu';
import { Link } from 'react-router-dom';
import { AlignLeft, Maximize, MoreHorizontal } from 'react-feather';
import logo from "../../../assets/images/logo.png";

const Header = () => {
  const [_ , setSidebar] = useState<any>(false);
  // const [rightSidebar, setRightSidebar] = useState<any>(true);
  const [headerbar, setHeaderbar] = useState<any>(true);

  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth <= 991) {
        setSidebar(false)
        document.querySelector(".page-main-header")?.classList.add('open');
        document.querySelector(".page-sidebar")?.classList.add('open');
      } else {
        setSidebar(true)
        document.querySelector(".page-main-header")?.classList.remove('open');
        document.querySelector(".page-sidebar")?.classList.remove('open');
      }
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);


  

  useEffect(() => {
    if (window.innerWidth <= 991) {
      setSidebar(false)
      document.querySelector(".page-main-header")?.classList.add('open');
      document.querySelector(".page-sidebar")?.classList.add('open');
    } else {
      setSidebar(true)
      document.querySelector(".page-main-header")?.classList.remove('open');
      document.querySelector(".page-sidebar")?.classList.remove('open');
    }


  }, []);

  function openCloseSidebar() {
    const pageMainHeader = document.querySelector(".page-main-header");

    if (!pageMainHeader?.classList.contains("open")) {
      setSidebar(false);
      document.querySelector(".page-main-header")?.classList.add("open");
      document.querySelector(".page-sidebar")?.classList.add("open");
    } else {
      setSidebar(true);
      document.querySelector(".page-main-header")?.classList.remove("open");
      document.querySelector(".page-sidebar")?.classList.remove("open");
    }
  }

  // function showRightSidebar() {
  //   if (rightSidebar) {
  //     setRightSidebar(!rightSidebar)
  //     document.querySelector(".right-sidebar")?.classList.add('show');
  //   } else {
  //     setRightSidebar(!rightSidebar)
  //     document.querySelector(".right-sidebar")?.classList.remove('show');
  //   }
  // }

  //full screen function
  function goFull() {
    if ((document.fullscreenElement && document.fullscreenElement !== null) ||
      (!document.fullscreen && !document.exitFullscreen)) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      }
    } else {
      document.exitFullscreen();
    }
  }

  return (
    <Fragment>
      <div className="page-main-header" >
        <div className="main-header-right row">
          <div className="main-header-left d-lg-none col-auto">
            <div className="logo-wrapper">
              <Link to={`${process.env.PUBLIC_URL}/dashboard/home`}>
                <img className="img-fluid" src={logo} alt="" />
              </Link>
            </div>
          </div>
          <div className="mobile-sidebar d-block col-auto">
            <div className="flex-grow-1 text-end switch-sm">
              <label className="switch">
                <a href="#javascript" onClick={() => openCloseSidebar()}>
                  <AlignLeft />
                </a>
              </label>
            </div>
          </div>
          <div className="nav-right col p-0">
            <ul className={`nav-menus ${headerbar ? '' : 'open'}`}>
              <li>
                {/* <SearchHeader /> */}
              </li>
              <li>
                <a onClick={goFull} className="text-dark" href="#!">
                  <Maximize />
                </a>
              </li>
              <li className="onhover-dropdown">

                <Language />
              </li>
              {/* <li className="onhover-dropdown">
                <Notification />
                <Bell />
                <span className="dot"></span>
                <Notification />
              </li> */}
              {/* <li>
                <a href="#javascript" onClick={showRightSidebar}>
                  <MessageCircle />
                  <span className="dot"></span>
                </a>
              </li> */}
              <UserMenu />
            </ul>
            <div className="d-lg-none mobile-toggle pull-right" onClick={() => setHeaderbar(!headerbar)}><MoreHorizontal /></div>
          </div>
          <script id="result-template" type="text/x-handlebars-template">
            <div className="ProfileCard u-cf">
              <div className="ProfileCard-avatar">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-airplay m-0"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1">
                </path>
                  <polygon points="12 15 17 21 7 21 12 15"></polygon>
                </svg>
              </div>
              <div className="ProfileCard-details">
                <div className="ProfileCard-realName"></div>
              </div>
            </div>
          </script>
          <script id="empty-template" type="text/x-handlebars-template">
            <div className="EmptyMessage">{"Your search turned up 0 results. This most likely means the backend is down, yikes!"}</div>
          </script>
        </div>
      </div>
    </Fragment>
  )
};
export default Header;