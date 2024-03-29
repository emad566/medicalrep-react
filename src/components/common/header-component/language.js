import React, { Fragment, useState } from 'react';
import { useTranslation } from "react-i18next";
import AppLangKeys from '../../../localization/AppLangKeys';
import { useDispatch } from 'react-redux';

const Language = () => {
    const { i18n } = useTranslation(localStorage.getItem('lang')?? 'ar');
    const { t } = useTranslation();
    const [selected,setSelected] = useState(localStorage.getItem('lang')?? 'ar');

    
    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
        setSelected(lng)
        localStorage.setItem('lang', lng);
        handleLayout(lng=='ar'? 'rtl': 'ltr');
      };

    const dispatch = useDispatch();
    const handleLayout = (layout) => {
        document.querySelectorAll(".main-layout li").forEach((item) => {
            item.classList.remove('active');
        });
        document.body.setAttribute('main-theme-layout', layout);
        document.documentElement.dir = layout;
        dispatch({ type: 'ADD_LAYOUT', payload: layout });
    }

    return (
        <Fragment>
            <div>
            <a className="txt-dark" href="#javascript">
                  <h6 className='text-uppercase'>{selected}</h6></a>
                <ul className="language-dropdown onhover-show-div p-20">
                    <li onClick={() => changeLanguage('en')}>
                        <a href="#javascript" data-lng="en">
                            <i className="flag-icon flag-icon-is"></i> {t(AppLangKeys.English)}
                        </a>
                    </li>
                    <li onClick={() => changeLanguage('ar')}>
                        <a href="#javascript" data-lng="sa">
                            <i className="flag-icon flag-icon-sa"></i> {t(AppLangKeys.Arabic)}
                        </a>
                    </li>
                </ul>
            </div>
        </Fragment>
    );
};


export default Language;