import { Typeahead } from "react-bootstrap-typeahead";
import SaveCancelModel from "../../../app-components/SaveCancelModel";
import { useEffect, useState } from "react";
import { apiGet, apiPost, apiPut, listRoles } from "../../../api/http";
import { toast } from "react-toastify";
import Routes from "../../../constant/Routes";
import { useTranslation } from "react-i18next";
import AppLangKeys from "../../../localization/AppLangKeys";
import { Formik, Form, useField, useFormikContext, useFormik } from "formik";
import * as Yup from "yup";
import MyTextInput from "../../../app-components/MyTextInput";
import MyCheckbox from "../../../app-components/MyCheckbox";
import { Button } from "react-bootstrap";

const phoneRegExp =
  /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\. \\\/]?)?((?:\(?\d{1,}\)?[\-\. \\\/]?)*)$/;

function CreateUser({ handleList, toggleHandler, title, isOpen, isEdit, row }) {
  const { t } = useTranslation();
  console.log(row);
  const initialValues = {
    name: row?.name ?? "",
    username: row?.username ?? "",
    email: row?.email ?? "",
    user_phone_no: row?.user_phone_no ?? "",
    is_active: row?.is_active == 1 ? true : false,
  };

  const validationSchema = Yup.object({
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
    user_phone_no: Yup.string()
      .matches(phoneRegExp, t(AppLangKeys.phoneNumberIsNotValid))
      .required(t(AppLangKeys.phoneNumberIsRequired)),

    is_active: Yup.boolean().oneOf([true, false]),
  });

  const formik = useFormik(
    {
      initialValues: initialValues,
      validationSchema: validationSchema,
      onSubmit: onSubmit,
    },
    [row]
  );

  const [loading, setLoading] = useState(false);
  const [roleOptions, setRoleOptions] = useState([row?.role]);
  const [selectedRole, setSelectedRole] = useState(row?.role);

  const [errors, setErrors] = useState({});

  const [queryParams, setQueryParams] = useState({
    paginationCounter: 10,
    page: 1,
    sortColumnName: "name",
    sortDirection: "asc",
    glopaleSearch: "",
  });

  function resetForm() {
    setLoading(false);
    setSelectedRole("");
    setErrors({});
    if (roleOptions.length < 1) {
      handleListRoles();
    }
  }

  useEffect(() => {
    setRoleOptions([row?.role]);
    setSelectedRole(row?.role);
    handleListRoles();
  }, [row]);

  useEffect(() => {
    setRoleOptions([row?.role]);
  }, [row]);

  async function handleListRoles(queryData) {
    // setLoading(true);
    const responseJson = await apiGet(Routes.ROLES, queryData ?? queryParams);

    if (responseJson.status) {
      let newRoleOptions = responseJson.data?.roles?.data?.map(
        (role) => role.name
      );
      if (selectedRole != "" && selectedRole != undefined) {
        newRoleOptions = [selectedRole, ...newRoleOptions];
      }
      setRoleOptions([...new Set(newRoleOptions)]);
    } else {
      toast.error(responseJson.message);
    }
    // setLoading(false);
  }

  async function handleStore() {
    setLoading(true);
    let responseJson = {};
    if (isEdit) {
      responseJson = await apiPut(`${Routes.USERS}/${row.id}`, {});
    } else {
      responseJson = await apiPost(Routes.USERS, {});
    }

    if (responseJson.status) {
      toast.success(responseJson.message);
      handleList();
      resetForm();
    } else {
      toast.error(responseJson.message);
      setErrors(responseJson.errors);
    }
    setLoading(false);
  }

  function onSelectHandler(roles) {
    setSelectedRole(roles.length > 0 ? roles[0] : "");

    let newErrors = {};
    if (roles.length < 1) {
      newErrors = {
        ...errors,
        role: [t(AppLangKeys.youMustSelectOneRole)],
      };
    } else {
      newErrors = {
        ...errors,
        role: [],
      };
    }
    setErrors(newErrors);
    return newErrors;
  }

  async function onSubmit(values) {
    alert(JSON.stringify(values, null, 2));
  }

  function handleOnSubmit() {
    formik.handleSubmit();
  }

  return (
    <SaveCancelModel
      {...{
        title,
        toggleHandler,
        isOpen,
        isEdit,
        onSubmit: handleOnSubmit,
        loading,
      }}
    >
      <form
        onSubmit={formik.handleSubmit}
        id="submitCreateUser"
        className="theme-form mega-form needs-validation"
        noValidate=""
      >
        <MyTextInput
          label={`${t(AppLangKeys.name)} *`}
          placeholder={`${t(AppLangKeys.name)} *`}
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          errors={formik.errors?.name}
        />

        <MyTextInput
          label={`${t(AppLangKeys.username)} *`}
          placeholder={`${t(AppLangKeys.username)} *`}
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.username}
          errors={formik.errors?.username}
        />

        <MyTextInput
          label={`${t(AppLangKeys.Email)} *`}
          placeholder={`${t(AppLangKeys.Email)} *`}
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
          errors={formik.errors?.email}
        />

        <MyTextInput
          label={`${t(AppLangKeys.phone)} *`}
          placeholder={`${t(AppLangKeys.phone)} *`}
          id="user_phone_no"
          name="user_phone_no"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.user_phone_no}
          errors={formik.errors?.user_phone_no}
        />

        <div className="form-group">
          <label htmlFor="role">{`${t(AppLangKeys.choseRoles)} *`}</label>
          <Typeahead
            id="role"
            clearButton
            defaultSelected={[row?.role ?? ""]}
            labelKey={`${t(AppLangKeys.choseRoles)} *`}
            multiple={false}
            options={roleOptions}
            placeholder={`${t(AppLangKeys.choseRoles)} *`}
            onChange={(roles) => onSelectHandler(roles)}
            onInputChange={(searchVal) =>
              handleListRoles({ ...queryParams, glopaleSearch: searchVal })
            }
          />
          <span>{errors?.role?.length > 0 && errors.role[0]}</span>
        </div>

        <MyCheckbox
          id="is_active"
          name="is_active"
          onChange={formik.handleChange}
          checked={formik.values.is_active}
          errors={formik.errors?.is_active}
        >
          {t(AppLangKeys.Active)}
        </MyCheckbox>
      </form>
    </SaveCancelModel>
  );
}

export default CreateUser;
