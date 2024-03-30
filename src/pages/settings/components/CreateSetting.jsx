import SaveCancelModel from "../../../app-components/SaveCancelModel";
import Refresh from "../../../app-components/Refresh";
import { useState } from "react";
import { apiPost, apiPut } from "../../../api/http";
import { toast } from "react-toastify";
import Routes from "../../../constant/Routes";
import { useTranslation } from "react-i18next";
import AppLangKeys from "../../../localization/AppLangKeys";
import { Formik } from "formik";
import * as Yup from "yup";
import MyTextarea from "../../../app-components/MyTextarea";
import MyTextInput from "../../../app-components/MyTextInput";

const phoneRegExp =
  /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\. \\\/]?)?((?:\(?\d{1,}\)?[\-\. \\\/]?)*)$/;

function CreateSetting({
  handleList,
  toggleHandler,
  title,
  isOpen,
  isEdit,
  row,
}) {
  const { t } = useTranslation();
  const initialValues = {
    set_value: row?.set_value ?? "",
  };

  const validationSchema = Yup.object({
    set_value: Yup.string()
      .max(191, t(AppLangKeys.mustBe_50CharactersOrLess))
      .min(0, t(AppLangKeys.mustBe_3CharactersAtLess))
      .required(t(AppLangKeys.required)),
  });

  const [loading, setLoading] = useState(false);
  const [customFormik, setCustomFormik] = useState(false);

  const [queryParams, setQueryParams] = useState({
    paginationCounter: 100,
    page: 1,
    sortColumnName: "id",
    sortDirection: "asc",
    glopaleSearch: "",
  });

  function resetForm() {
    setLoading(false);
  }

  async function handleStore() {
    setLoading(true);
    let responseJson = {};
    if (isEdit) {
      responseJson = await apiPut(
        `${Routes.SETTINGS}/${row.id}`,
        customFormik.values
      );
    } else {
      responseJson = await apiPost(Routes.SETTINGS, customFormik.values);
    }

    if (responseJson.status) {
      toast.success(responseJson.message);
      handleList();
      resetForm();
    } else {
      toast.error(responseJson.message);

      for (const key in responseJson.errors) {
        if (responseJson.errors.hasOwnProperty(key)) {
          const value = responseJson.errors[key];
          customFormik.setFieldError(key, value);
        }
      }
    }
    setLoading(false);
  }

  async function onSubmit(values) {
    handleStore();
  }

  function handleOnSubmit(formik) {
    setCustomFormik(formik);
    formik.handleSubmit();
  }

  return (
    <Refresh
      {...{
        toggleHandler,
        isOpen,
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
              isOpen,
              isEdit,
              onSubmit: () => handleOnSubmit(formik),
              loading,
            }}
          >
            <form
              onSubmit={formik.handleSubmit}
              className="theme-form mega-form needs-validation"
              noValidate=""
            >
              {["text", "number", "email", "url"].includes(row.type) && (
                <MyTextInput
                  label={`${t(AppLangKeys.content)} *`}
                  placeholder={`${t(AppLangKeys.content)} *`}
                  name="set_value"
                  type={row.type}
                />
              )}

              {["textarea"].includes(row.type) && (
                <MyTextarea
                  label={`${t(AppLangKeys.content)} *`}
                  placeholder={`${t(AppLangKeys.content)} *`}
                  name="set_value"
                  type={row.type}
                />
              )}
            </form>
          </SaveCancelModel>
        )}
      </Formik>
    </Refresh>
  );
}

export default CreateSetting;
