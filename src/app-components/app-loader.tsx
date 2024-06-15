import React, { Fragment} from "react";

interface AppLoaderProps {
  show: boolean;
}

const AppLoader: React.FC<AppLoaderProps> = ({ show }) => {
 

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

export default AppLoader;
