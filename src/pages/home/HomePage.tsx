import { Fragment } from "react";
import AppLangKeys from "../../localization/AppLangKeys";
import TableCaption from "../../app-components/TableCaption";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <TableCaption
        title={""}
        parent={t(AppLangKeys.HomePage)}
        formTitle={t(AppLangKeys.HomePage)}
        isCreate={false}
      />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <h3>{t(AppLangKeys.HomePage)}</h3>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
