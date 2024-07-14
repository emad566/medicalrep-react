import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AppLangKeys from '../../../localization/AppLangKeys';



const CompanyCheckBoxGroupSelector: React.FC<any> = ({ onChange }):any => {
  const {t} = useTranslation();

  const [actions, setActions] = useState<any>({
    isGroup: false, 
  });

  const handleCheckboxChange = (name: string) => {
    const updatedActions = { ...actions, [name]: !actions[name] };
    setActions(updatedActions);
    onChange(updatedActions);
  };

  return (
    <div className="form-group" style={{ paddingTop:"30px" }}>
      <label className="mb-0 mx-10" htmlFor="isGroup" style={{ margin:"10px" }} > 
        <input
          style={{ width:"20px", height:"20px", margin:"0px 10px"  }}
          type="checkbox"
          name="isGroup"
          id="isGroup"
          checked={actions.isGroup}
          onChange={() => handleCheckboxChange('isGroup')}
        />
        {t(AppLangKeys.TeamStatistics)}
      </label> 
    </div>
  );
};

export default CompanyCheckBoxGroupSelector;