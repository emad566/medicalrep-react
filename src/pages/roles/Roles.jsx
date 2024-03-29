import React, { Fragment, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { apiDelete, apiGet } from "../../api/http";
import { toast } from "react-toastify";
import Routes from "../../constant/Routes";
import TableCaption from "../../app-components/TableCaption";
import CustomLoadingSpinner from "../../app-components/CustomLoadingSpinner";
import CreateRole from "./components/CreateRole";
import { RoleColumns } from "./components/RoleColumns";
import { useTranslation } from "react-i18next";
import AppLangKeys from "../../localization/AppLangKeys";

const Roles = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [createOptions, setCreateOptions] = useState({
    isOpen: false,
    isEdit: false,
    row: {},
    title: "Create Role",
  });

  const screenHeight = window.innerHeight;

  const [queryParams, setQueryParams] = useState({
    paginationCounter: 10,
    page: 1,
    sortColumnName: "name",
    sortDirection: "asc",
    glopaleSearch: "",
  });

  useEffect(() => {
    handleList();
  }, []);

  async function handleList(queryData) {
    setCreateOptions((prev) => ({
      ...prev,
      isOpen: false,
    }));

    setLoading(true);
    const responseJson = await apiGet(Routes.ROLES, queryData ?? queryParams);
    if (responseJson.status) {
      setData(responseJson.data.roles);
    } else {
      toast.error(responseJson.message);
    }
    setLoading(false);
  }

  async function handleDelete(id) {
    setData({ ...data, data: data.data.filter((row) => row.id !== id) });

    const responseJson = await apiDelete(Routes.ROLES + `/${id}`);
    if (responseJson.status) {
      toast.success(responseJson.message);
    } else {
      toast.error(responseJson.message);
    }
  }

  function toggleCreateHandler(isEdit, row, title) {
    setCreateOptions((prev) => ({
      ...prev,
      isOpen: !prev.isOpen,
      isEdit: isEdit ?? prev.isEdit,
      row: row ?? prev.row,
      title: title ?? prev.title,
    }));
  }

  return (
    <Fragment>
      <TableCaption
        title={t(AppLangKeys.list)}
        parent={t(AppLangKeys.Roles)}
        formTitle={t(AppLangKeys.createRole)}
        isCreate={true}
        toggleHandler={toggleCreateHandler}
      />
      <CreateRole
        toggleHandler={toggleCreateHandler}
        handleList={handleList}
        {...createOptions}
      />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="form-group mb-0">
                <div className="input-group mb-0">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-search"></i>
                    </span>
                  </div>
                  <input
                    value={queryParams.glopaleSearch}
                    onChange={(e) => {
                      const queryData = {
                        ...queryParams,
                        glopaleSearch: e.target.value,
                      };
                      setQueryParams((prev) => queryData);
                      handleList(queryData);
                    }}
                    className="form-control"
                    type="text"
                    placeholder={t(AppLangKeys.search)}
                    aria-label="Amount (to the nearest dollar)"
                  />
                </div>
              </div>

              <div className="card-header">
                <DataTable
                  columns={RoleColumns(
                    queryParams.page,
                    queryParams.paginationCounter,
                    handleDelete,
                    toggleCreateHandler
                  )}
                  data={data.data}
                  striped
                  fixedHeader
                  fixedHeaderScrollHeight={`${screenHeight - 300}px`}
                  progressPending={loading}
                  progressComponent={<CustomLoadingSpinner />}
                  pagination
                  paginationServer
                  paginationTotalRows={data?.meta?.total ?? 10}
                  onChange={async (tableState) => {
                    const {
                      rowsPerPage,
                      page,
                      sortField,
                      sortAsc,
                      searchTerm,
                    } = tableState;
                    const queryData = {
                      paginationCounter: rowsPerPage,
                      page: page,
                      sortColumnName: sortField,
                      sortDirection: sortAsc ? "asc" : "desc",
                      glopaleSearch: searchTerm || "",
                    };
                    setQueryParams((prev) => queryData);
                    await handleList(queryData);
                  }}
                  onChangeRowsPerPage={async (newPaginationCounter) => {
                    const queryData = {
                      ...queryParams,
                      paginationCounter: newPaginationCounter,
                    };
                    setQueryParams((prev) => queryData);
                    await handleList(queryData);
                  }}
                  onChangePage={async (newPageNumber) => {
                    const queryData = { ...queryParams, page: newPageNumber };
                    setQueryParams((prev) => queryData);
                    await handleList(queryData);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Roles;
