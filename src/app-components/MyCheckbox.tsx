import { useField } from "formik";

const MyCheckbox:React.FC<any> = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <div className="form-group">
      <div>
        <label>
          <input
            style={{ width: "45px", height: "20px" }}
            {...field}
            {...props}
            type="checkbox"
          />
          {children}
        </label>
      </div>

      {meta.touched && meta.error ? (
        <span className="error">{meta.error}</span>
      ) : null}
    </div>
  );
};

export default MyCheckbox;
