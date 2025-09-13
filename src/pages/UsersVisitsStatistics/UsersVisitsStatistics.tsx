import { useTranslation } from "react-i18next";
import TableCaption from "../../app-components/TableCaption";
import { Fragment, useState, useEffect } from "react";
import AppLangKeys from "../../localization/AppLangKeys";
import { apiGet } from "../../api/http";
import Routes from "../../constant/Routes";
import { toast } from "react-toastify";
import DataTable from "react-data-table-component";
import { UsersVisitsStatisticsColumns } from "./components/UsersVisitsStatisticsColumns";
import CustomLoadingSpinner from "../../app-components/CustomLoadingSpinner";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const UsersVisitsStatistics = () => {
    const { t } = useTranslation();
    // Helper function to get default date range
    const getDefaultDateRange = () => {
        const now = new Date();
        const currentDay = now.getDay(); // 0 = Sunday, 6 = Saturday
        
        // Calculate date_from: previous day 10 AM
        let dateFrom = new Date(now);
        dateFrom.setDate(now.getDate() - 1);
        dateFrom.setHours(10, 0, 0, 0);
        
        // If current day is Saturday (6), decrease by one more day
        if (currentDay === 6) {
            dateFrom.setDate(dateFrom.getDate() - 1);
        }
        
        // Calculate date_to: exactly 24 hours after date_from
        let dateTo = new Date(dateFrom);
        dateTo.setHours(dateFrom.getHours() + 24);
        
        return { dateFrom, dateTo };
    };

    const defaultRange = getDefaultDateRange();
    const [queryParams, setQueryParams] = useState<any>({
        date_from: defaultRange.dateFrom,
        date_to: defaultRange.dateTo,
        export: false
    });
    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState<any>(false);
    const [exportLoading, setExportLoading] = useState<any>(false);

    function setQueryParamsHandler(key: string, value: any) {
        const newQueryParams = { ...queryParams, [key]: value };
        setQueryParams(() => newQueryParams);
    }

    async function handleList(queryData?: any, showLoading = true) {
        if (showLoading) setLoading(true);
        
        const requestData = {
            date_from: queryData?.date_from || queryParams.date_from,
            date_to: queryData?.date_to || queryParams.date_to,
            export: queryData?.export || false
        };

        // Format dates to YYYY-MM-DD HH:mm:ss
        if (requestData.date_from instanceof Date) {
            requestData.date_from = requestData.date_from.toISOString().slice(0, 19).replace('T', ' ');
        }
        if (requestData.date_to instanceof Date) {
            requestData.date_to = requestData.date_to.toISOString().slice(0, 19).replace('T', ' ');
        }

        const responseJson = await apiGet(Routes.usersVisitsStatistics, requestData);
        
        if (responseJson.status) {
            setData(responseJson.data.items || []);
            
            // If export was requested and URL is provided, download the file
            if (requestData.export && responseJson.data.url) {
                const link = document.createElement('a');
                link.href = responseJson.data.url;
                link.download = `users_visits_statistics_${requestData.date_from}_to_${requestData.date_to}.xlsx`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                toast.success(t(AppLangKeys.exportToExcel) + " " + t(AppLangKeys.success));
            }
        } else {
            toast.error(responseJson.message || "Error occurred");
        }
        
        if (showLoading) setLoading(false);
    }

    const handleFilter = () => {
        handleList(queryParams, true);
    };

    const handleExport = async () => {
        setExportLoading(true);
        const exportParams = { ...queryParams, export: true };
        await handleList(exportParams, false);
        setExportLoading(false);
    };

    const handleClear = () => {
        const defaultRange = getDefaultDateRange();
        const clearedParams = {
            date_from: defaultRange.dateFrom,
            date_to: defaultRange.dateTo,
            export: false
        };
        setQueryParams(clearedParams);
    };

    useEffect(() => {
        handleList();
    }, []);

    return (
        <Fragment>
            <TableCaption
                title={t(AppLangKeys.UsersVisitsStatistics)}
                parent={t(AppLangKeys.TeamStatistics)}
                formTitle={""}
                isCreate={false}
                permissions={["User_Index"]}
            />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            {/* Filter Section */}
                            <div className="card-header">
                                <div className="row" style={{ padding: "20px 30px" }}>
                                    <div className="col-md-3">
                                        <label className="form-label">{t(AppLangKeys.date_from)}</label>
                                        <DatePicker
                                            selected={queryParams.date_from}
                                            onChange={(date: Date) => setQueryParamsHandler("date_from", date)}
                                            showTimeSelect
                                            timeFormat="HH:mm"
                                            timeIntervals={15}
                                            dateFormat="yyyy-MM-dd HH:mm"
                                            className="form-control"
                                            maxDate={new Date()}
                                            timeCaption="Time"
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <label className="form-label">{t(AppLangKeys.date_to)}</label>
                                        <DatePicker
                                            selected={queryParams.date_to}
                                            onChange={(date: Date) => setQueryParamsHandler("date_to", date)}
                                            showTimeSelect
                                            timeFormat="HH:mm"
                                            timeIntervals={15}
                                            dateFormat="yyyy-MM-dd HH:mm"
                                            className="form-control"
                                            maxDate={new Date()}
                                            minDate={queryParams.date_from}
                                            timeCaption="Time"
                                        />
                                    </div>
                                    <div className="col-md-6 d-flex align-items-end">
                                        <div className="btn-group" role="group">
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                                onClick={handleFilter}
                                                disabled={loading}
                                            >
                                                <i className="fa fa-filter me-2"></i>
                                                {t(AppLangKeys.filter)}
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-success"
                                                onClick={handleExport}
                                                disabled={exportLoading || loading}
                                            >
                                                {exportLoading ? (
                                                    <i className="fa fa-spinner fa-spin me-2"></i>
                                                ) : (
                                                    <i className="fa fa-download me-2"></i>
                                                )}
                                                {t(AppLangKeys.exportToExcel)}
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                onClick={handleClear}
                                                disabled={loading}
                                            >
                                                <i className="fa fa-times me-2"></i>
                                                {t(AppLangKeys.clear)}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Data Table */}
                            <div className="card-body">
                                <DataTable
                                    data={data}
                                    columns={UsersVisitsStatisticsColumns()}
                                    progressPending={loading}
                                    progressComponent={<CustomLoadingSpinner />}
                                    pagination
                                    paginationPerPage={25}
                                    paginationRowsPerPageOptions={[10, 25, 50, 100]}
                                    highlightOnHover
                                    striped
                                    responsive
                                    noDataComponent={
                                        <div className="text-center py-4">
                                            <i className="fa fa-chart-bar fa-3x text-muted mb-3"></i>
                                            <p className="text-muted">{t(AppLangKeys.noDataFound)}</p>
                                        </div>
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default UsersVisitsStatistics;
