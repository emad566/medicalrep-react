import { Typeahead } from "react-bootstrap-typeahead";
import SaveCancelModel from "../../../app-components/SaveCancelModel";
import { useEffect, useState } from "react";
import { apiGet, apiPost, apiPut, listRoles } from "../../../api/http";
import { toast } from "react-toastify";
import Routes from "../../../constant/Routes";
import { useTranslation } from "react-i18next";
import AppLangKeys from "../../../localization/AppLangKeys";

function CreateRole({ handleList, toggleHandler, title, isOpen, isEdit, row }) {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [permissionOptions, setPermissionOptions] = useState(
    row?.permissions ?? []
  );
  const [selectedPermissions, setSelectedPermissions] = useState(
    row?.roles ?? []
  );
  const [name, setName] = useState(row?.name ?? "");
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
    setSelectedPermissions([]);
    setName("");
    setErrors({});
    if (permissionOptions.length < 1) {
      handleListPermissions();
    }
  }

  useEffect(() => {
    handleListPermissions();
  }, [row]);

  useEffect(() => {
    setPermissionOptions(row?.permissions ?? []);
    setSelectedPermissions(row?.permissions ?? []);
    setName(row?.name ?? "");
  }, [row]);

  function onNameChangeHandler(event) {
    const newName = event.target.value;
    setName(newName);
    let newErrors = {};
    if (newName.trim == "" || newName.length < 4) {
      newErrors = {
        ...errors,
        name: [t(AppLangKeys.roleNameMustBeGraterThan_3Letters)],
      };
    } else if (errors.name?.length > 0) {
      newErrors = {
        ...errors,
        name: [],
      };
    }
    setErrors(newErrors);
    return newErrors;
  }

  async function handleListPermissions(queryData) {
    setLoading(true);
    const responseJson = await apiGet(
      Routes.PERMISSIONS,
      queryData ?? queryParams
    );
    if (responseJson.status) {
      let newpermissionOptions = [
        ...selectedPermissions,
        ...responseJson.data?.permissions?.data?.map(
          (permission) => permission.name
        ),
      ];
      setPermissionOptions([...new Set(newpermissionOptions)]);
    } else {
      toast.error(responseJson.message);
    }
    setLoading(false);
  }

  async function handleStore() {
    setLoading(true);

    let responseJson = {};
    if (isEdit) {
      responseJson = await apiPut(`${Routes.ROLES}/${row.id}`, {
        name: name,
        permissions: selectedPermissions,
      });
    } else {
      responseJson = await apiPost(Routes.ROLES, {
        name: name,
        permissions: selectedPermissions,
      });
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

  function onSelectHandler(permssions) {
    setSelectedPermissions(permssions);
  }

  function onSubmit() {
    if (name.trim != "" && (errors?.name?.length ?? 0) < 1) {
      handleStore();
    }
  }

  return (
    <SaveCancelModel
      {...{ title, toggleHandler, isOpen, isEdit, onSubmit, loading }}
    >
      <form className="theme-form mega-form needs-validation" noValidate="">
        <div className="form-group">
          <label className="col-form-label">{t(AppLangKeys.roleName)}</label>
          <input
            className="form-control mb-2"
            type="text"
            placeholder={t(AppLangKeys.roleName)}
            value={name}
            onChange={(event) => onNameChangeHandler(event)}
          />
          <span>{errors?.name?.length > 0 && errors.name[0]}</span>
        </div>

        <div className="form-group">
          <Typeahead
            id="multiple-typeahead"
            clearButton
            defaultSelected={row.permissions ?? []}
            labelKey={t(AppLangKeys.chosePermission)}
            multiple
            options={permissionOptions}
            placeholder={t(AppLangKeys.chosePermission)}
            onChange={(permssions) => onSelectHandler(permssions)}
            onInputChange={(searchVal) =>
              handleListPermissions({
                ...queryParams,
                glopaleSearch: searchVal,
              })
            }
          />
        </div>
      </form>
    </SaveCancelModel>
  );
}

export default CreateRole;
