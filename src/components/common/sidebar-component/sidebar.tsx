import { Fragment, useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import logo from '../../../assets/images/logo.png';
import logo_compact from '../../../assets/images/logo/compact-logo.png';
import UserPanel from './userPanel';
import { MENUITEMS } from '../../../components/common/sidebar-component/menu';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import configDB from '../../../data/customizer/config';
import AppCaches from '../../../constant/AppCaches';
import AppPaths from '../../../constant/AppPaths';
import { apiPost } from '../../../api/http';
import { toast } from 'react-toastify';
import Routes from '../../../constant/Routes';

const Sidebar = () => {
    const [_, setloadPermissions] = useState<any>(0);

    useMemo(() => {
        async function reloadPermissions() {
            const token = localStorage.getItem('token') ?? "";
            if (token != "") {
                const responseJson = await apiPost(Routes.LOGINSYC);
                if (responseJson.status) {
                    localStorage.setItem(AppCaches.role_type, responseJson.data.user_role);

                    localStorage.setItem(
                        AppCaches.authPermissions,
                        JSON.stringify(responseJson.data.Auth_Permission)
                    );
                    setloadPermissions(1);
                } else {
                    toast.error(responseJson.message);
                    // localStorage.clear();
                }
            }
        }
        reloadPermissions();
    }, []);

    const [margin, setMargin] = useState<any>(0);
    const [width, setWidth] = useState<any>(0);
    const [hideLeftArrowRTL, setHideLeftArrowRTL] = useState<any>(true);
    const [hideRightArrowRTL, setHideRightArrowRTL] = useState<any>(true);
    const [hideRightArrow, setHideRightArrow] = useState<any>(true);
    const [hideLeftArrow, setHideLeftArrow] = useState<any>(true);
    const [mainmenu, setMainMenu] = useState<any>({ mainmenu: MENUITEMS });
    const wrapper = configDB.data.settings.sidebar.wrapper;
    const layout = useSelector((content: any) => content.Customizer.layout);
    const { t } = useTranslation();

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();

        var currentUrl = window.location.pathname;

        MENUITEMS.filter(items => {
            if (items.path === currentUrl)
                setNavActive(items)
            if (!items.children) return false
            items.children.filter((subItems: any) => {
                if (subItems.path === currentUrl)
                    setNavActive(subItems)
                if (!subItems.children) return false
                subItems.children.filter((subSubItems: any) => {
                    if (subSubItems.path === currentUrl) {
                        setNavActive(subSubItems)
                        return true
                    }
                    else {
                        return false
                    }
                })
                return subItems
            })
            return items
        })

        const timeout = setTimeout(() => {
            const elmnt = document.getElementById("myDIV");
            const menuWidth = elmnt?.offsetWidth;
            if ((menuWidth ?? 0) > window.innerWidth) {
                setHideRightArrow(false);
                setHideLeftArrowRTL(false);
            } else {
                setHideRightArrow(true);
                setHideLeftArrowRTL(true);
            }
        }, 500)

        return () => {
            window.removeEventListener('resize', handleResize)
            clearTimeout(timeout)
        }

    }, []);



    function handleResize() {
        setWidth(window.innerWidth - 310);
    }

    const setNavActive = (item: any) => {
        MENUITEMS.filter(menuItem => {
            if (menuItem !== item)
                menuItem.active = false
            if (menuItem.children && menuItem.children.includes(item))
                menuItem.active = true
            if (menuItem.children) {
                menuItem.children.filter((submenuItems: any) => {
                    if (submenuItems.children && submenuItems.children.includes(item)) {
                        menuItem.active = true
                        submenuItems.active = true
                        return true
                    } else {
                        return false
                    }
                })
            }
            return menuItem
        })
        item.active = !item.active
        setMainMenu({ mainmenu: MENUITEMS })
    }
    // Click Toggle menu
    const toggletNavActive = (item: any) => {
        if (window.innerWidth < 992) {
            document.querySelector(".page-main-header")?.classList.add('open');
            document.querySelector(".page-sidebar")?.classList.add('open');
        }

        if (!item.active) {
            MENUITEMS.forEach(a => {
                if (MENUITEMS.includes(item))
                    a.active = false
                if (!a.children) return false
                a.children.forEach((b: any) => {
                    if (a.children.includes(item)) {
                        b.active = false
                    }
                    if (!b.children) return false
                    b.children.forEach((c: any) => {
                        if (b.children.includes(item)) {
                            c.active = false
                        }
                    })
                })
            });
        }
        item.active = !item.active
        setMainMenu({ mainmenu: MENUITEMS })
    }

    const scrollToRight = () => {
        const elmnt = document.getElementById("myDIV");
        const menuWidth = elmnt?.offsetWidth ?? 0;
        const temp = menuWidth + margin;
        if (temp < menuWidth) {
            setMargin(-temp);
            setHideRightArrow(true);
        }
        else {
            setMargin((margin: any) => margin += (-width));
            setHideLeftArrow(false);
        }
    }

    const scrollToLeft = () => {
        // If Margin is reach between screen resolution
        if (margin >= -width) {
            setMargin(0)
            setHideLeftArrow(true);
        }
        else {
            setMargin((margin: any) => margin += width);
            setHideRightArrow(false);
        }
    }


    const scrollToLeftRTL = () => {
        if (margin <= -width) {
            setMargin((margin: any) => margin += -width);
            setHideLeftArrowRTL(true);
        }
        else {
            setMargin((margin: any) => margin += -width);
            setHideRightArrowRTL(false);
        }
    }

    const scrollToRightRTL = () => {
        const temp = width + margin
        // Checking condition for remaing margin
        if (temp === 0) {
            setMargin(temp);
            setHideRightArrowRTL(true);
        }
        else {
            setMargin((margin: any) => margin += width);
            setHideRightArrowRTL(false);
            setHideLeftArrowRTL(false);
        }
    }

    const role_type = localStorage.getItem(AppCaches.role_type);
    const authPermissions = JSON.parse(`${localStorage.getItem(AppCaches.authPermissions)}`);

    function handleNavLinkIsShow(permssions: any, role_types: any) {
        return (permssions?.every((item: any) => authPermissions?.includes(item)) ?? false) && role_types.includes(role_type)
    }

    return (
        <Fragment>
            <div className="page-sidebar">
                <div className="main-header-left d-none d-lg-block">
                    <div className="logo-wrapper compactLogo">
                        <Link to={AppPaths.home}>
                            <img className="blur-up lazyloaded" src={logo_compact} alt="" />
                            <img className="blur-up lazyloaded" src={logo} alt="" />
                        </Link>
                    </div>
                </div>
                <div className="sidebar custom-scrollbar">
                    <UserPanel />
                    <ul
                        className="sidebar-menu"
                        id="myDIV"
                        style={wrapper === 'horizontal_sidebar' ? layout === 'rtl' ?
                            { 'marginRight': margin + 'px' } : { 'marginLeft': margin + 'px' } : { margin: '0px' }}
                    >
                        <li className={`left-arrow ${layout === 'rtl' ? hideLeftArrowRTL ? 'd-none' : '' : hideLeftArrow ? 'd-none' : ''}`}
                            onClick={(wrapper === 'horizontal_sidebar' && layout === 'rtl') ? scrollToLeftRTL : scrollToLeft}><i className="fa fa-angle-left"></i></li>
                        {
                            mainmenu?.mainmenu?.map((menuItem: any, i: any) =>
                                <li className={`${menuItem.active ? 'active' : ''}`} key={i}>

                                    {(menuItem.sidebartitle) ?
                                        <div className="sidebar-title">{menuItem.sidebartitle} </div>
                                        : ''}
                                    {(menuItem.type === 'sub') ?
                                        <a className="sidebar-header" href="#javascript" onClick={() => toggletNavActive(menuItem)}>
                                            <menuItem.icon />
                                            <span>{t(menuItem.title)}</span>
                                            <i className="fa fa-angle-right pull-right"></i>
                                        </a>
                                        : ''}
                                    {(menuItem.type === 'link' && handleNavLinkIsShow(menuItem.permissions, menuItem.role_types)) ?
                                        <Link
                                            to={`${menuItem.path}`}
                                            className={`sidebar-header ${menuItem.active ? 'active' : ''}`}
                                            target={menuItem.target}
                                            onClick={(event) => menuItem.onClick ? menuItem.onClick(event) : toggletNavActive(menuItem)}
                                        >
                                            <menuItem.icon /><span>{t(menuItem.title)}</span>
                                            {menuItem.children ?
                                                <i className="fa fa-angle-right pull-right"></i> : ''}
                                        </Link>
                                        : ''}
                                    {menuItem.children ?
                                        <ul
                                            className={`sidebar-submenu ${menuItem.active ? 'menu-open' : ''}`}
                                            style={menuItem.active ? { opacity: 1, transition: 'opacity 500ms ease-in' } : {}}
                                        >
                                            {menuItem.children.map((childrenItem: any, index: any) =>
                                                <li key={index} className={childrenItem.children ? childrenItem.active ? 'active' : '' : ''}>
                                                    {(childrenItem.type === 'sub') ?
                                                        <a href="#javascript" onClick={() => toggletNavActive(childrenItem)} >
                                                            <i className="fa fa-circle"></i>{t(childrenItem.title)} <i className="fa fa-angle-right pull-right"></i></a>
                                                        : ''}

                                                    {(childrenItem.type === 'link') ?
                                                        <Link
                                                            to={`${childrenItem.path}`}
                                                            className={childrenItem.active ? 'active' : ''}
                                                            onClick={() => toggletNavActive(childrenItem)}
                                                        >
                                                            <i className="fa fa-circle"></i>{t(childrenItem.title)} </Link>
                                                        : ''}
                                                    {childrenItem.children ?
                                                        <ul className={`sidebar-submenu ${childrenItem.active ? 'menu-open' : 'active'}`}>
                                                            {childrenItem.children.map((childrenSubItem: any, key: any) =>
                                                                <li className={childrenSubItem.active ? 'active' : ''} key={key}>
                                                                    {(childrenSubItem.type === 'link') ?
                                                                        <Link
                                                                            to={`${childrenSubItem.path}`}
                                                                            className={childrenSubItem.active ? 'active' : ''}
                                                                            onClick={() => toggletNavActive(childrenSubItem)}
                                                                        >
                                                                            <i className="fa fa-circle"></i>{t(childrenSubItem.title)}</Link>
                                                                        : ''}
                                                                </li>
                                                            )}
                                                        </ul>
                                                        : ''}
                                                </li>
                                            )}
                                        </ul>
                                        : ''}
                                </li>
                            )
                        }
                        <li className={`right-arrow ${layout === 'rtl' ? hideRightArrowRTL ? 'd-none' : '' : hideRightArrow ? 'd-none' : ''}`}
                            onClick={(wrapper === 'horizontal_sidebar' && layout === 'rtl') ? scrollToRightRTL : scrollToRight}><i className="fa fa-angle-right"></i></li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
};

export default Sidebar;

