import { useField } from "formik";
import AppLangKeys from "../localization/AppLangKeys";
import { useTranslation } from "react-i18next";

const MySelect: React.FC<any> = ({ label, ...props }) => {
  const { t } = useTranslation();

  const [field, meta] = useField(props);
  return (
    <div className="form-group">
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
        {...field}
        {...props}
        class="form-select"
        aria-label="Default select example"
      >
        <option value="">{`${t(AppLangKeys.select)} ${label} ...`}</option>
        {props.options.map((opt: any) => (
          <option value={opt}>{opt}</option>
        ))}
      </select>

      {meta.touched && meta.error ? (
        <span className="error">{meta.error}</span>
      ) : null}
    </div>
  );
};

export default MySelect;
