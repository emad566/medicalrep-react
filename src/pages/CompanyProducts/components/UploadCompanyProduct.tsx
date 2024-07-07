import SaveCancelModel from "../../../app-components/SaveCancelModel";
import Refresh from "../../../app-components/Refresh";
import React, { useEffect, useState } from "react";
import { apiPostFiles } from "../../../api/http";
import { toast } from "react-toastify";
import Routes from "../../../constant/Routes";
import { useTranslation } from "react-i18next";
import {  Formik } from "formik";
import * as Yup from "yup"; 
import MyFileCSV from "../../../app-components/MyFileCSV";

const UploadCompanyProduct: React.FC<any> = ({ handleList, toggleHandler, title, isOpen, isEdit, queryParams}) => {
  const { t } = useTranslation();
  const [progress, setProgress] = useState<any>(-1);
  const initialValues = { 
  };


  const validationObj = { };


  const validationSchema = Yup.object(validationObj);

  const [loading, setLoading] = useState<any>(false);
  const [_, setErrors] = useState<any>({});
  const [customFormik, setCustomFormik] = useState<any>(false);


  function resetForm() {
    setLoading(false);
    setErrors({});
  }




  async function handleStore() {
    setLoading(true);
    let responseJson: any = {};
   
    responseJson = await apiPostFiles(Routes.uploadCsv, {...customFormik.values, ...queryParams}, setProgress);


    if (responseJson.status) {
      toast.success(responseJson.message);
      handleList();
      resetForm();
    } else {
      toast.error(responseJson.message);
      setErrors(responseJson.errors); 
      for (const key in responseJson.errors) {
        if (responseJson.errors.hasOwnProperty(key)) {
          const value = responseJson.errors[key];
          customFormik.setFieldError(key, value);
        }
      }
    }
    setLoading(false);
  }

  async function onSubmit() {
    handleStore();
  }

  useEffect(() => {
    setProgress(-1);
  
  }, [toggleHandler])
  

  function handleOnSubmit(formik: any) {
    setCustomFormik(formik);
    formik.handleSubmit();
  }

  return (
    <Refresh
      {...{
        toggleHandler,
        isOpen:isOpen,
      }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <SaveCancelModel
            {...{
              title,
              toggleHandler,
              isOpen:isOpen,
              isEdit,
              onSubmit: () => handleOnSubmit(formik),
              loading,
            }}
          >
            <form
              key="T120222"
              onSubmit={formik.handleSubmit}
              className="theme-form mega-form needs-validation"
              noValidate={true}
              encType="multipart/form-data"
            >
             
              
              <MyFileCSV
                label={`${t("CSV File")} *`}
                accept=".csv"
                id="csv"
                name="csv" 
              />
           

              {progress > -1 ? (
                <div>
                  <progress
                    value={progress}
                    style={{ width: "92%", height: "25px", backgroundColor: "#f90" }}
                    max={100}
                    title={`${progress}%`}
                  /> 
                  <span
                      style={{ padding: "10px", marginBottom:"10px", display:"inline-block"}}
                  >{progress} %</span>
                </div>
              ) : null}
              
            </form>
          </SaveCancelModel>
        )}
      </Formik>
    </Refresh>
  );
}

export default UploadCompanyProduct;
