import { Typeahead } from "react-bootstrap-typeahead";
import SaveCancelModel from "../../../app-components/SaveCancelModel";
import { useEffect, useState } from "react";
import { apiGet, apiPost, apiPut, listRoles } from "../../../api/http";
import { toast } from "react-toastify";
import Routes from "../../../constant/Routes";
import AppLangKeys from "../../../localization/AppLangKeys";
import { useTranslation } from "react-i18next";

function CreatePermission({
  handleList,
  toggleHandler,
  title,
  isOpen,
  isEdit,
  row,
}) {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [roleOptions, setRoleOptions] = useState(row?.roles ?? []);
  const [selectedRoles, setSelectedRoles] = useState(row?.roles ?? []);
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
    setSelectedRoles([]);
    setName("");
    setErrors({});
    if (roleOptions.length < 1) {
      handleListRoles();
    }
  }

  useEffect(() => {
    handleListRoles();
  }, [row]);

  useEffect(() => {
    setRoleOptions(row?.roles ?? []);
    setSelectedRoles(row?.roles ?? []);
    setName(row?.name ?? "");
  }, [row]);

  function onNameChangeHandler(event) {
    const newName = event.target.value;
    setName(newName);
    let newErrors = {};
    if (newName.trim == "" || newName.length < 4) {
      newErrors = {
        ...errors,
        name: [t(AppLangKeys.permissionNameMustBeGraterThan_3Letters)],
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

  async function handleListRoles(queryData) {
    setLoading(true);
    const responseJson = await apiGet(Routes.ROLES, queryData ?? queryParams);
    if (responseJson.status) {
      let newRoleOptions = [
        ...selectedRoles,
        ...responseJson.data?.roles?.data?.map((role) => role.name),
      ];
      setRoleOptions([...new Set(newRoleOptions)]);
    } else {
      toast.error(responseJson.message);
    }
    setLoading(false);
  }

  async function handleStore() {
    setLoading(true);

    let responseJson = {};
    if (isEdit) {
      responseJson = await apiPut(`${Routes.PERMISSIONS}/${row.id}`, {
        name: name,
        roles: selectedRoles,
      });
    } else {
      responseJson = await apiPost(Routes.PERMISSIONS, {
        name: name,
        roles: selectedRoles,
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

  function onSelectHandler(roles) {
    setSelectedRoles(roles);
    
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
          <label className="col-form-label">
            {t(AppLangKeys.permissionName)}
          </label>
          <input
            className="form-control mb-2"
            type="text"
            placeholder={t(AppLangKeys.permissionName)}
            value={name}
            onChange={(event) => onNameChangeHandler(event)}
          />
          <span>{errors?.name?.length > 0 && errors.name[0]}</span>
        </div>

        <div className="form-group">
          <Typeahead
            id="multiple-typeahead"
            clearButton
            defaultSelected={row.roles ?? []}
            labelKey={t(AppLangKeys.choseRoles)}
            multiple
            options={roleOptions}
            placeholder={t(AppLangKeys.choseRoles)}
            onChange={(roles) => onSelectHandler(roles)}
            onInputChange={(searchVal) =>
              handleListRoles({ ...queryParams, glopaleSearch: searchVal })
            }
          />
        </div>
      </form>
    </SaveCancelModel>
  );
}

export default CreatePermission;
