import { Fragment, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { apiGet } from "../../api/http";
import { toast } from "react-toastify";
import Routes from "../../constant/Routes";
import { DownloadsColumns } from "./components/DownloadsColumns";
import TableCaption from "../../app-components/TableCaption";
import CustomLoadingSpinner from "../../app-components/CustomLoadingSpinner";
import AppLangKeys from "../../localization/AppLangKeys";
import { useTranslation } from "react-i18next";
import ResponsiveDataTable from "../../app-components/ResponsiveDataTable";

const Downloads = () => {
  const { t } = useTranslation();

  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<any>(true);

  const screenHeight = window.innerHeight;

  const [queryParams, setQueryParams] = useState<any>({
    paginationCounter: 100,
    page: 1,
    sortColumnName: "id",
    sortDirection: "DESC",
    glopaleSearch: "",
  });

  useEffect(() => {
    handleList();
  }, []);

  async function handleList(queryData?: any, showLoading = true) {
    if (showLoading) setLoading(true);
    const responseJson = await apiGet(
      Routes.DOWNLOADS,
      queryData ?? queryParams
    );
    if (responseJson.status) {
      setData(responseJson.data.downloads);
    } else {
      toast.error(responseJson.message);
    }
    if (showLoading) setLoading(false);
  }


  return (
    <Fragment>
      <TableCaption
        title={t(AppLangKeys.list)}
        parent={t(AppLangKeys.downloads)}
        formTitle={""}
        isCreate={false}
        toggleHandler={() => { }}
      />

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="form-group mb-0 col-sm-8">
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
                      setQueryParams(() => queryData);
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
                <ResponsiveDataTable data={data}>
                  <DataTable
                    columns={DownloadsColumns()}
                    data={data.data}
                    striped
                    fixedHeader
                    fixedHeaderScrollHeight={`${screenHeight - 300}px`}
                    progressPending={loading}
                    progressComponent={<CustomLoadingSpinner />}
                    pagination
                    paginationServer
                    sortServer
                    paginationTotalRows={data?.meta?.total ?? 10}
                    paginationPerPage={queryParams.paginationCounter}
                    paginationRowsPerPageOptions={[10, 20, 25, 50, 100, 150, 200, 250, 500, 1000, 2500, 5000, 7500, 10000]}
                    onSort={async (columnState: any, sortDirection) => {
                      const queryData = {
                        ...queryParams,
                        sortDirection: sortDirection,
                        sortColumnName: columnState.columnName,
                      };
                      setQueryParams(() => queryData);
                      await handleList(queryData, false);
                    }}

                    onChangeRowsPerPage={async (newPaginationCounter) => {
                      const queryData = {
                        ...queryParams,
                        paginationCounter: newPaginationCounter,
                      };
                      setQueryParams(() => queryData);
                      await handleList(queryData);
                    }}
                    onChangePage={async (newPageNumber) => {
                      const queryData = { ...queryParams, page: newPageNumber };
                      setQueryParams(() => queryData);
                      await handleList(queryData);
                    }}
                  />
                </ResponsiveDataTable>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Downloads;
