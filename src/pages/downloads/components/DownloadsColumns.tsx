
import { useTranslation } from 'react-i18next';
import AppLangKeys from '../../../localization/AppLangKeys';
import {apiGetFile} from '../../../api/http';
import Routes from '../../../constant/Routes';
import { useState } from 'react';
import AppCaches from '../../../constant/AppCaches';

export const DownloadsColumns:any = () => {
  const { t } = useTranslation();
  const [_, setLoading] = useState<any>(true);

  function getLastNamePart(str: any) {
    const parts = str.split("/");
    return parts[parts.length - 1];
  }

  async function handleDownload(row: any) {
    setLoading(true);
    await apiGetFile(
      Routes.DOWNLOADS + "/" + row.id,
      {},
      getLastNamePart(row.path)
    );
    setLoading(false);
  }

   const authPermissions = JSON.parse(
    `${localStorage.getItem(AppCaches.authPermissions)}`
  );

  function handleCan(permssions: any) {
    return permssions?.every((item: any) => authPermissions.includes(item)) ?? false;
  }
  
  return [
    {
      name: t(AppLangKeys.ID),
      columnName: "id",
      selector: (row: any) => row.id,
      sortable: true,
      center: true,
      glow: 1,
      maxWidth: "50px",
    },
    {
      name: t(AppLangKeys.type),
      columnName: "type",
      selector: (row: any) => t(row.type),
      sortable: true,
      center: true,
      glow: 1,
      maxWidth: "100px",
    },
    
    {
      name: t(AppLangKeys.created_at),
      columnName: "created_at",
      selector: (row: any) => row.created_at,
      sortable: true,
      center: true,
      glow: 1,
      maxWidth: "200px",
    },
    {
      name: t(AppLangKeys.path),
      columnName: "path",
      selector: (row: any) => row.path,
      sortable: true,
      center: true,
      glow: 1,
      maxWidth: "450px",
    }, 

    
  {
    name: t('Action'),
    selector: (row: any) => <div key={row.id}>
            {handleCan(["Download", "Download_Download"]) && <a href='#' onClick={()=>handleDownload(row)}><span ><i className="fa fa-download" style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}></i></span></a>}
        </div>,
    sortable: false,
    center: true, 
    glow: 1,
    maxWidth: "180px",
  },
  ];
};
