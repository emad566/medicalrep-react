import { useTranslation } from "react-i18next";
import AppLangKeys from "../../localization/AppLangKeys";

const Footer = () => {
    const { t } = useTranslation();
    
    return (
    <footer className="footer">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 footer-copyright">
                    <p className="mb-0">{t(AppLangKeys.copyright_2022WicckbotAllRightsReserved)}</p>
                </div>
                <div className="col-md-6">
                    <p className="pull-right mb-0">{t(AppLangKeys.wicckbotMadeWith)}
                        <i className="fa fa-heart"></i>
                    </p>
                </div>
            </div>
        </div>
</footer>
)};

export default Footer;