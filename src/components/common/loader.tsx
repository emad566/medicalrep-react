import React, { Fragment, useState, useEffect } from "react";

const Loader: React.FC = () => {
  const [show, setShow] = useState<any>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []); // Removed 'show' from the dependencies

  return (
    <Fragment>
      <div className={`loader-wrapper ${show ? "" : "loderhide"}`}>
        <div className="loader bg-white">
          <div className="whirly-loader"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Loader;
