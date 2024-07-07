import React from 'react';
import { useField, useFormikContext } from 'formik';

const MyFileCSV: React.FC<any> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const { setFieldValue } = useFormikContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget?.files && event.currentTarget.files[0];
    setFieldValue(field.name, file);
  };

  return (
    <div className="form-group">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        className="form-control"
        type="file"
        {...props}
        onChange={handleChange}
      />

      {meta.touched && meta.error ? (
        <span className="error">{meta.error}</span>
      ) : null} 
    </div>
  );
};

export default MyFileCSV;