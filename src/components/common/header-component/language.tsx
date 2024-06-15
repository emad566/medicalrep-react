import { Fragment, useState } from 'react';
import { useTranslation } from "react-i18next";
import { useDispatch } from 'react-redux';
import AppCaches from '../../../constant/AppCaches';

const Language = () => {
    const { i18n } = useTranslation(localStorage.getItem('lang')?? 'ar');
    const [_ ,setSelected] = useState<any>(localStorage.getItem('lang')?? 'ar');

    
    const changeLanguage = (lng: any) => {
        i18n.changeLanguage(lng);
        setSelected(lng)
        localStorage.setItem('lang', lng);
        handleLayout(lng=='ar'? 'rtl': 'ltr');
      };

    const dispatch = useDispatch();
    const handleLayout = (layout: any) => {
        document.querySelectorAll(".main-layout li").forEach((item) => {
            item.classList.remove('active');
        });
        document.body.setAttribute('main-theme-layout', layout);
        document.documentElement.dir = layout;
        dispatch({ type: 'ADD_LAYOUT', payload: layout });
    }

    const langCached = localStorage.getItem(AppCaches.lang)?? 'ar';

    return (
        <Fragment>
            <div>
            <a className="txt-dark" href="#javascript">
<h6 className='text-uppercase' onClick={() => changeLanguage(langCached == 'ar'? 'en' : 'ar')}>
                    {langCached == 'ar'? 'EN' : 'ع'} 
                    <i className={`flag-icon px-3 flag-icon-${langCached == 'ar'? 'is' : 'sa'}`}></i>
                  </h6>
                  </a>
                {/* <ul className="language-dropdown onhover-show-div p-20">
                    {(langCached == 'ar') &&<li onClick={() => changeLanguage('en')}>
                        <a href="#javascript" data-lng="en">
                            <i className="flag-icon flag-icon-is"></i> {t(AppLangKeys.English)}
                        </a>
                    </li>}
                    {(langCached == 'en') && <li onClick={() => changeLanguage('ar')}>
                        <a href="#javascript" data-lng="sa">
                            <i className="flag-icon flag-icon-sa"></i> {t(AppLangKeys.Arabic)}
                        </a>
                    </li>}
                </ul> */}
            </div>
        </Fragment>
    );
};


export default Language;