import { Fragment, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { apiGet, apiGetFile, apiPut } from "../../api/http";
import { toast } from "react-toastify";
import Routes from "../../constant/Routes";
import CustomLoadingSpinner from "../../app-components/CustomLoadingSpinner";
import AppLangKeys from "../../localization/AppLangKeys";
import { useTranslation } from "react-i18next";
import ResponsiveDataTable from "../../app-components/ResponsiveDataTable";
import TableCaption from "../../app-components/TableCaption"; 
import { CompanyProductColumns } from "./components/CompanyProductColumns";
import JsxSelect from "../../app-components/JsxSelect";
import AppCaches from "../../constant/AppCaches"; 
import UploadCompanyProduct from "./components/UploadCompanyProduct";
import JsxTextInput from "../../app-components/JsxTextInput"; 

const CompanyProducts = () => {
  const { t } = useTranslation();



  const [data, setData] = useState<any>({
    product_names : [],
    company_codes : [],
    names : [],
    items : []
  });
  const [loading, setLoading] = useState<any>(true); 
  const [createOptions, setCreateOptions] = useState<any>({
    isOpen: false,
    isOpenUpload: false,
    isEdit: false,
    row: {},
    title: t(AppLangKeys.Upload),
  });

  const screenHeight = window.innerHeight;

  const [queryParams, setQueryParams] = useState<any>({
    name: localStorage.getItem(`${AppCaches.loginName}`)?? '',
    month: new Date().getMonth(),
    year: new Date().getFullYear(), 
  });

  function queryParamsHandler(key:string, value:any): void {
    const queryData = {
      ...queryParams,
      [key]: value,  
    }; 
    handleList(queryData);
    setQueryParams(() => queryData);
    console.log(queryParams);
  }

  useEffect(() => {
    handleList();
  }, []);

  async function handleList(queryData?: any, showLoading = true) {
    setCreateOptions((prev: any) => ({
      ...prev,
      isOpen: false, 
    }));

    if (showLoading) setLoading(true);
    const responseJson = await apiGet(Routes.CompanyProducts, queryData ?? queryParams);
    if (responseJson.status) {
      setData(responseJson.data); 
    } else {
      toast.error(responseJson.message);
    }
    if (showLoading) setLoading(false);
  }
  
  async function downloadTemplateHandler() {
     await apiGetFile(Routes.CompanyProducts, {...queryParams, export:1},  `${queryParams.name}-${queryParams.month}-${queryParams.year}.csv` );
  }
  
  async function updateTotalHandler(value:any) {
    if(isNaN(parseInt(value))) return; 
    setData({
      ...data,
      total: parseInt(value)
    });
    const responseJson = await apiPut(Routes.updateTotal, {...queryParams, achivement:value});
    if (responseJson.status) {  
      
    } else {
      toast.error(responseJson.message);
    } 
  }

  async function updateQuantityHandler(row:any, company:any, value:any){
    
    try {
      if(isNaN(parseFloat(value))) return; 
      value = parseInt(value);
      const product = row.Product_Name;
      let Total = row.Total;
      if(company != 'TARGET') Total = parseInt(Total) - parseInt(row[company]) + parseInt(value); 
      let TARGET = company == 'TARGET'? value : row.TARGET;
      const ACH = Total/(TARGET == 0? 1 : TARGET) *100

      setData({
        ...data,
        items: data.items.map((row: any) =>
          row.Product_Name !== product
            ? row
            : { ...row, [company]: parseInt(value), Total: parseInt(Total), TARGET: TARGET, ACH: ACH.toFixed(2)}
        )
      });

      const responseJson = await apiPut(Routes.CompanyProduct, 
        {
          ...queryParams,
          company_code: company,
          Product_Name: product,
          quantity: parseInt(value)
        },
      );


      if (responseJson.status) {  
        // toast.success('تم الحفظ');
      } else {
        toast.error(responseJson.message);
        setTimeout(function() {
          location.reload();
        }, 2000);
      }
    } catch (error) {
      setTimeout(function() {
        location.reload();
      }, 3000);
    }
    
  }

  function toggleUploadHandler(isEdit: any, row: any, title: any) {
    setCreateOptions((prev: any) => ({
      ...prev,
      isOpen: !prev.isOpen,
      isEdit: isEdit ?? prev.isEdit,
      row: row ?? prev.row,
      title: title ?? prev.title,
    }));
  }

  const authPermissions = JSON.parse(
    `${localStorage.getItem(AppCaches.authPermissions)}`
  );

  function handleCan(permssions: any) {
    return permssions?.every((item: any) => authPermissions.includes(item)) ?? false;
  }

  const currentYear = new Date().getFullYear();
  const yearsArray = [currentYear - 2, currentYear - 1, currentYear];

  return (
    <Fragment>
      <TableCaption
        title={t(AppLangKeys.list)}
        parent={t(AppLangKeys.MonthlyReport)}
        formTitle={""}
        isCreate={false} 
        permissions={["ZidWhatsHasOrder"]}
      > 
        
        <button
          className="btn btn-pill btn-primary btn-air-primary"
          type="button"
          onClick={downloadTemplateHandler}
        >
          <i className="fa fa-download"></i>
          <span style={{ margin: "10px" }}>{t(AppLangKeys.downloadTemplate)}</span>
        </button>

        {handleCan(['Updat_Company_Product_Monthly_Report']) &&
        <button
          className="btn btn-pill btn-primary btn-air-primary"
          type="button"
          onClick={() =>
            toggleUploadHandler(false, {}, AppLangKeys.Upload)
          }
        >
          <i className="fa fa-plus"></i>
          <span style={{ margin: "10px" }}>{t(AppLangKeys.Upload)}</span>
        </button>}
      </TableCaption>

      <UploadCompanyProduct
        toggleHandler={toggleUploadHandler}
        handleList={handleList} 
        queryParams={queryParams}
        {...createOptions}
      />

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="row" style={{ padding:"0px 30px", paddingTop:"20px" }}>
                <div className="col-sm-12 col-md-3">  
                  <JsxSelect 
                    label = {t(AppLangKeys.name)}
                    options = {data?.names}
                    value = {queryParams.name}
                    onChange = {(event:any)=>{queryParamsHandler('name', event?.target?.value)}}
                  />
                </div>
                <div className="col-sm-12 col-md-3">  
                  <JsxSelect 
                    label = {t(AppLangKeys.month)}
                    options = {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                    value = {queryParams.month}
                    onChange = {(event:any)=>{queryParamsHandler('month', event?.target?.value)}}
                  />
                </div>
                <div className="col-sm-12 col-md-3">  
                  <JsxSelect 
                    label = {t(AppLangKeys.year)}
                    options = {yearsArray}
                    value = {queryParams.year}
                    onChange = {(event:any)=>{queryParamsHandler('year', event?.target?.value)}}
                  />
                </div>
                <div className="col-sm-12 col-md-3">  
                  <JsxTextInput
                    label={t(AppLangKeys.total)}
                    name="total"
                    id="total"
                    value={data.total?? 0}
                    onChange={(event:any)=>{updateTotalHandler(event?.target.value)}}
                    disabled={!handleCan(['Updat_Company_Product_Monthly_Report'])}
                  /> 
                </div>
              </div> 
                
              
              <div className="card-header">
                <ResponsiveDataTable data={data?.items}>
                  <DataTable
                    columns={CompanyProductColumns(data, updateQuantityHandler)}
                    data={data?.items}
                    striped
                    fixedHeader
                    fixedHeaderScrollHeight={`${screenHeight - 300}px`}
                    progressPending={loading}
                    progressComponent={<CustomLoadingSpinner />}
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

export default CompanyProducts;
