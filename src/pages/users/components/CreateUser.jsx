import { Typeahead } from "react-bootstrap-typeahead";
import SaveCancelModel from "../../../app-components/SaveCancelModel";
import Refresh from "../../../app-components/Refresh";
import { useEffect, useState } from "react";
import { apiGet, apiPost, apiPut, listRoles } from "../../../api/http";
import { toast } from "react-toastify";
import Routes from "../../../constant/Routes";
import { useTranslation } from "react-i18next";
import AppLangKeys from "../../../localization/AppLangKeys";
import { Formik, Form, useField, useFormikContext } from "formik";
import * as Yup from "yup";
import MyTextInput from "../../../app-components/MyTextInput";
import MyCheckbox from "../../../app-components/MyCheckbox";
import MySelect from "../../../app-components/MySelect";

const phoneRegExp =
  /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\. \\\/]?)?((?:\(?\d{1,}\)?[\-\. \\\/]?)*)$/;

function CreateUser({ handleList, toggleHandler, title, isOpen, isEdit, row }) {
  const { t } = useTranslation();
  const initialValues = {
    name: row?.name ?? "",
    username: row?.username ?? "",
    email: row?.email ?? "",
    password: "",
    password_confirmation: "",
    user_phone_no: row?.user_phone_no ?? "",
    is_active: row?.is_active == 1 ? true : false,
    role_name: row?.role ?? "",
    role_type: row?.role_type ?? "",
  };

  const {
    password: pw,
    password_confirmation: pw_confirmation,
    ...editInitialValues
  } = initialValues;

  const validationObj = {
    name: Yup.string()
      .max(50, t(AppLangKeys.mustBe_50CharactersOrLess))
      .min(3, t(AppLangKeys.mustBe_3CharactersAtLess))
      .required(t(AppLangKeys.required)),

    username: Yup.string()
      .max(50, t(AppLangKeys.mustBe_50CharactersOrLess))
      .min(3, t(AppLangKeys.mustBe_3CharactersAtLess))
      .required(t(AppLangKeys.required)),

    email: Yup.string()
      .email(t(AppLangKeys.invalidEmailAddresss))
      .required(t(AppLangKeys.required)),

    password: Yup.string()
      .max(50, t(AppLangKeys.mustBe_50CharactersOrLess))
      .min(3, t(AppLangKeys.mustBe_3CharactersAtLess))
      .required(t(AppLangKeys.required)),

    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password")], t(AppLangKeys.passwordsMustMatch))
      .required(t(AppLangKeys.required)),

    user_phone_no: Yup.string()
      .matches(phoneRegExp, t(AppLangKeys.phoneNumberIsNotValid))
      .required(t(AppLangKeys.phoneNumberIsRequired)),

    is_active: Yup.boolean().oneOf([true, false]),
    role_name: Yup.string().required(t(AppLangKeys.youMustSelectOneRole)),
    role_type: Yup.string()
      .oneOf(["Admin", "User"])
      .required(t(AppLangKeys.youMustSelectOneRole)),
  };

  const {
    password: pw2,
    password_confirmation: pw_confirmation2,
    ...editValidationObj
  } = validationObj;

  const validationSchema = Yup.object(
    isEdit ? editValidationObj : validationObj
  );

  const [loading, setLoading] = useState(false);
  const [roleOptions, setRoleOptions] = useState([row?.role]);
  const [errors, setErrors] = useState({});
  const [customFormik, setCustomFormik] = useState(false);

  const [queryParams, setQueryParams] = useState({
    paginationCounter: 10,
    page: 1,
    sortColumnName: "name",
    sortDirection: "asc",
    glopaleSearch: "",
  });

  function resetForm() {
    setLoading(false);
    setErrors({});
    if (roleOptions.length < 1) {
      handleListRoles();
    }
  }

  useEffect(() => {
    setRoleOptions([row?.role]);
    handleListRoles();
  }, [row]);

  useEffect(() => {
    setRoleOptions([row?.role]);
  }, [row]);

  async function handleListRoles(queryData) {
    const responseJson = await apiGet(Routes.ROLES, queryData ?? queryParams);

    if (responseJson.status) {
      let newRoleOptions = responseJson.data?.roles?.data?.map(
        (role) => role.name
      );
      setRoleOptions([...new Set(newRoleOptions)]);
    } else {
      toast.error(responseJson.message);
    }
  }

  async function handleStore() {
    setLoading(true);
    let responseJson = {};
    if (isEdit) {
      responseJson = await apiPut(
        `${Routes.USERS}/${row.userId}`,
        customFormik.values
      );
    } else {
      responseJson = await apiPost(Routes.USERS, customFormik.values);
    }

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

  function onSelectHandler(formik, roles) {
    formik.setFieldValue("role_name", roles[0]);
  }

  async function onSubmit(values) {
    alert(JSON.stringify(values, null, 2));
    console.log(JSON.stringify(values, null, 2));
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
        initialValues={isEdit ? editInitialValues : initialValues}
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
              <MyTextInput
                label={`${t(AppLangKeys.name)} *`}
                placeholder={`${t(AppLangKeys.name)} *`}
                name="name"
                type="text"
              />

              <MyTextInput
                label={`${t(AppLangKeys.username)} *`}
                placeholder={`${t(AppLangKeys.username)} *`}
                name="username"
                type="text"
              />

              <MyTextInput
                label={`${t(AppLangKeys.Email)} *`}
                placeholder={`${t(AppLangKeys.Email)} *`}
                name="email"
                type="text"
              />

              {!isEdit && (
                <>
                  <MyTextInput
                    label={`${t(AppLangKeys.Password)} *`}
                    placeholder={`${t(AppLangKeys.Password)} *`}
                    name="password"
                    type="password"
                  />

                  <MyTextInput
                    label={`${t(AppLangKeys.passwordConfirmation)} *`}
                    placeholder={`${t(AppLangKeys.passwordConfirmation)} *`}
                    name="password_confirmation"
                    type="password"
                  />
                </>
              )}

              <MyTextInput
                label={`${t(AppLangKeys.phone)} *`}
                placeholder={`${t(AppLangKeys.phone)} *`}
                name="user_phone_no"
                type="text"
              />

              <div className="form-group">
                <label htmlFor="role_name">{`${t(
                  AppLangKeys.choseRoles
                )} *`}</label>
                <Typeahead
                  id="role_name"
                  name="role_name"
                  clearButton
                  defaultSelected={[row?.role ?? ""]}
                  labelKey={`${t(AppLangKeys.choseRoles)} *`}
                  multiple={false}
                  options={roleOptions}
                  placeholder={`${t(AppLangKeys.choseRoles)} *`}
                  onChange={(roles) => onSelectHandler(formik, roles)}
                  onInputChange={(searchVal) =>
                    handleListRoles({
                      ...queryParams,
                      glopaleSearch: searchVal,
                    })
                  }
                />
                <span>{formik.errors?.role_name}</span>
              </div>

              <MySelect
                label={`${t(AppLangKeys.roleType)} *`}
                id="role_type"
                name="role_type"
                options={["Admin", "User"]}
              />

              <MyCheckbox name="is_active">{t(AppLangKeys.Active)}</MyCheckbox>
            </form>
          </SaveCancelModel>
        )}
      </Formik>
    </Refresh>
  );
}

export default CreateUser;
