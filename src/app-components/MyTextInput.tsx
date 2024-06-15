import { useField } from "formik";

const MyTextInput: React.FC<any> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form-group">
      <label className="col-form-label" htmlFor={props.id || props.name}>
        {label}
      </label>
      <input className="form-control mb-2" {...field} {...props} />
      {meta.touched && meta.error ? (
        <span className="error">{meta.error}</span>
      ) : null}
    </div>
  );
};

export default MyTextInput;