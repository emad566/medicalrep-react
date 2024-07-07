
const JsxTextInput: React.FC<any> = ({ label, ...props }) => { 
  return (
    <div className="form-group">
      <label className="col-form-label" htmlFor={props.id || props.name}>
        {label}
      </label>
      <input className="form-control mb-2" {...props} /> 
    </div>
  );
};

export default JsxTextInput;