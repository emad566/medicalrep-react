import React, { Fragment } from "react";
import { Home } from "react-feather";
import { Link } from "react-router-dom";
import { Add } from "../constant";
import { useTranslation } from "react-i18next";

const TableCaption = (props) => {
  const { t } = useTranslation();
  const breadcrumb = props;

  return (
    <Fragment>
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
                    <Link to={`${process.env.PUBLIC_URL}/dashboard/users`}>
                      <Home />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">{breadcrumb.parent}</li>
                  <li className="breadcrumb-item active">{breadcrumb.title}</li>
                </ol>
              </div>

              {props.isCreate && (
                <div className="page-header-right">
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
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TableCaption;
