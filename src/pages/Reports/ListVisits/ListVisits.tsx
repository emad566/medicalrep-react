import { useTranslation } from "react-i18next";
import TableCaption from "../../../app-components/TableCaption";
import { Fragment } from "react/jsx-runtime";
import AppLangKeys from "../../../localization/AppLangKeys";
import { useEffect, useState } from "react";
import { apiGet } from "../../../api/http";
import Routes from "../../../constant/Routes";
import { toast } from "react-toastify";
import DataTable from "react-data-table-component";
import { ListVisitColumns } from "./components/ListVisitColumns";
import CustomLoadingSpinner from "../../../app-components/CustomLoadingSpinner";

const ListVisits = () => {
    const { t } = useTranslation();
    const [queryParams, setQueryParams] = useState<any>({
        globalSearch: ""
    });
    const [data, setData] = useState<any>({});
    const [loading, setLoading] = useState<any>(true);

    function setQueryParamsHandelar (key:string, value:any){
        const newQueryParams = {...queryParams, [key]: value};
        handleList(newQueryParams, false);
        setQueryParams(() => newQueryParams);
    }

    async function handleList(queryData?:any, showLoading=true){
        if(showLoading) setLoading(true);
        const responseJson = await apiGet(Routes.visits, queryData?? queryParams);
        if (responseJson.status) {
            setData(responseJson.data.visits);
        }else{
            toast.error(responseJson.message)
        }
        if(showLoading) setLoading(false);
    }

    useEffect(() => {
        handleList();
    }, [])

    return (
        <Fragment>
          <TableCaption
            title={t(AppLangKeys.list)}
            parent={t(AppLangKeys.ListVisits)}
            formTitle={""}
            isCreate={false} 
            permissions={["ZidWhatsHasOrder"]}
          ></TableCaption>
    
          
    
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="row" style={{ padding:"0px 30px", paddingTop:"20px" }}>
                    <div className="input-group mb-0">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                            <i className="fa fa-search"></i>
                            </span>
                        </div>
                        <input
                            value={queryParams.globalSearch}
                            onChange={(e:any) => setQueryParamsHandelar("globalSearch", e?.target?.value)}
                            className="form-control"
                            type="text"
                            placeholder={t(AppLangKeys.search)}
                            aria-label="Amount (to the nearest dollar)"
                        />
                    </div>
                  </div> 
                    
                  
                  <div className="card-header">
                    <DataTable 
                        data={data.data}
                        columns={ListVisitColumns()}
                        progressPending={loading}
                        progressComponent={<CustomLoadingSpinner />}
                    />                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      );
}
 
export default ListVisits;