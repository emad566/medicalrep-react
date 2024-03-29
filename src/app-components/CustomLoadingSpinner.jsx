const CustomLoadingSpinner = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="loader-box">
        <div className="loader" style={{ margin: "auto" }}>
          <div className="line bg-danger"></div>
          <div className="line bg-danger"></div>
          <div className="line bg-danger"></div>
          <div className="line bg-danger"></div>
        </div>
      </div>
    </div>
  );
  
}

export default CustomLoadingSpinner;
