import { Home } from "react-feather";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AppPaths from "../constant/AppPaths";
import AppCaches from "../constant/AppCaches";

const TableCaption = (props: any) => {
  const { t } = useTranslation();
  const breadcrumb = props;

  const authPermissions = JSON.parse(
    `${localStorage.getItem(AppCaches.authPermissions)}`
  );

  function handleCan(permssions: any) {
    return permssions?.every((item: any) => authPermissions.includes(item)) ?? false;
  }

  return (
    <>
      <div className="container-fluid">
        <div className="page-header">
          <div className="row">
            <div
              className="col"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div className="page-header-left">
                <h3>{breadcrumb.title}</h3>
                <ol className="breadcrumb pull-right">
                  <li className="breadcrumb-item">
                    <Link to={AppPaths.home}>
                      <Home />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">{breadcrumb.parent}</li>
                  <li className="breadcrumb-item active">{breadcrumb.title}</li>
                </ol>
              </div>

                <div className="page-header-right">
                  {props.isCreate && handleCan(props.permissions ?? []) && (
                  <button
                    className="btn btn-pill btn-primary btn-air-primary"
                    type="button"
                    onClick={() =>
                      props.toggleHandler(false, {}, props.formTitle)
                    }
                  >
                    <i className="fa fa-plus"></i>
                    <span style={{ margin: "10px" }}>{t("Add")}</span>
                  </button>
                  )}
                  {props.children}
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableCaption;
