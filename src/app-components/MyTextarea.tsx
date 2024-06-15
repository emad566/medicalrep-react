import { useField } from "formik";
import React from "react";


const MyTextarea: React.FC<any> = ({ label, ...props }) => {
  const [field, meta] = useField<any>(props);

  return (
    <div className="form-group">
      <label className="col-form-label" htmlFor={props.id || props.name}>
        {label}
      </label>
      <textarea
        className="form-control mb-2"
        rows={5}
        maxLength={1000}
        {...field}
        {...props}
      >
        {field.value}
      </textarea>
      {meta.touched && meta.error ? (
        <span className="error">{meta.error}</span>
      ) : null}
    </div>
  );
};

export default MyTextarea;
