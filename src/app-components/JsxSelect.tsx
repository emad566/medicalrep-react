import AppLangKeys from "../localization/AppLangKeys";
import { useTranslation } from "react-i18next";

const JsxSelect: React.FC<any> = ({ label, ...props}) => {
  const { t } = useTranslation(); 
  return (
    <div className="form-group">

      {!(props.hidelabel?? false) && <label htmlFor={props.id || props.name}>{label}</label>}
      <select 
        {...props}
        className="form-select form-control"
        aria-label={`${t(AppLangKeys.select)} ${label} ...`}
      >
        <option value="">{`${t(AppLangKeys.select)} ${label} ...`}</option>
        {props.options.map((opt: any) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
 
    </div>
  );
};

export default JsxSelect;
