import React, { Fragment, useState } from "react";
import Breadcrumb from "../../../common/breadcrumb";
import Registration from "./registration";
import Email from "./email";
import Birthdate from "./birthdate";
import { FormWizardWithIcon } from "../../../../constant";

const FormWizard = () => {
  const [steps, setSteps] = useState(1);
  const [formdata, setFormdata] = useState({});

  return (
    <Fragment>
      <Breadcrumb title="Form Wizard" parent="Form" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>{FormWizardWithIcon}</h5>
              </div>
              <div className="card-body">
                {steps === 1 && <Registration setSteps={setSteps} setFormdata={setFormdata} formdata={formdata} />}

                {steps === 2 && <Email setSteps={setSteps} setFormdata={setFormdata} formdata={formdata} />}

                {steps === 3 && <Birthdate setSteps={setSteps} setFormdata={setFormdata} formdata={formdata} />}

                <div className="text-center">
                  <span className={`step ${steps > 1 ? "finish" : ""} ${steps === 1 ? "active" : ""}`} />
                  <span className={`step ${steps > 2 ? "finish" : ""} ${steps === 2 ? "active" : ""}`} />
                  <span className={`step ${steps > 3 ? "finish" : ""} ${steps === 3 ? "active" : ""}`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FormWizard;
