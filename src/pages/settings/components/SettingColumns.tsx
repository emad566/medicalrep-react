import { useTranslation } from 'react-i18next';
import AppLangKeys from '../../../localization/AppLangKeys';
import AppCaches from '../../../constant/AppCaches';

export const SettingColumns = (page: any, perPage: any, toggleHandler: any):any => {
  const { t } = useTranslation();
  
  return [
    {
      name: t("ID"),
      selector: (index: any) => {
          return <div>{((page-1) * perPage) + index + 1}</div>;
      },
      sortable: false,
      center: true,
      grow: 1,
    },
    {
      name: t("Name"),
      columnName: localStorage.getItem(AppCaches.lang) == 'ar'? "description_ar" : "description_en",
      selector: (row: any) => localStorage.getItem(AppCaches.lang) == 'ar'? row.description_ar : row.description_en,
      sortable: true,
      center: false,
      grow: 5,
      maxWidth: "350px"
    },
    
    {
      name: t(AppLangKeys.content),
      columnName: "set_value",
      selector: (row: any) => row.set_value,
      sortable: true,
      center: false,
      grow: 30,
      maxWidth: "550px"
    },
    
    {
      name: t("Action"),
      selector: (row: any) => <div key={row.id}>
              {<a href='#' onClick={()=>{toggleHandler(true, row, `${t(AppLangKeys.edit)} ${localStorage.getItem(AppCaches.lang) == 'ar'? row.description_ar : row.description_en}`)}}><span><i className="fa fa-pencil" style={{ width: 35, fontSize: 16, padding: 11, color: 'rgb(40, 167, 69)' }}></i></span></a>}
          </div>,
      sortable: false,
      center: true,
      grow: 2,
    },
  ];
};
