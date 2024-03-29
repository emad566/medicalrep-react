import React from 'react';
import SweetAlert from 'sweetalert2';
import Switch from 'react-switch';
import { useTranslation } from 'react-i18next';
import AppLangKeys from '../../../localization/AppLangKeys';

export const UserColumns = (page, perPage, handleDelete, toggleHandler, handleIsActiveUpdate, handleRestore) => {
  const { t } = useTranslation();
  
  function handleOnDelete(row) {
      SweetAlert.fire({
          title: t(AppLangKeys.areYouSureYouWantDelete) + ": " + row.name,
          cancelButtonText: t(AppLangKeys.cancel),
        confirmButtonText: t(AppLangKeys.yes),
          reverseButtons: true,
          showCancelButton: true,
          }).then((result) => {
              if (result.isConfirmed) {
                  handleDelete(row)
              }
          }
      );
  }




  return [
    {
      name: t("ID"),
      selector: (row, index) => {
          return <div>{((page-1) * perPage) + index + 1}</div>;
      },
      sortable: false,
      center: true,
      width: "5%",
    },
    {
      name: t("Name"),
      columnName: "name",
      selector: (row) => row.name,
      sortable: true,
      center: false,
      width: "20%",
    },
    {
      name: t("Role"),
      selector: (row) => <span className="badge rounded-pill badge-warning mb-1">{row.role}</span>,
      sortable: false,
      center: false,
      width: "10%",
      class: ""
    },
    {
      name: t(AppLangKeys.roleType),
      columnName: "role_type",
      selector: (row) => row.role_type,
      sortable: true,
      center: false,
      width: "10%",
      class: ""
    },
    {
      name: t(AppLangKeys.Email),
      columnName: "email",
      selector: (row) => row.email,
      sortable: true,
      center: false,
      width: "15%",
    },
    {
      name: t("Active"),
      columnName: "is_active",
      selector: (row) => 
              <Switch
                id="rowIsActive"
                checked={row.is_active == 0? false : true}
                onChange={(checked)=>{handleIsActiveUpdate(checked, row.userId)}}
              />,
      sortable: true,
      center: false,
      width: "15%",
    },
    
    {
      name: t("Action"),
      selector: (row) => <div key={row.userId}>
              {(row.deleted_at != null) && <a href='#' onClick={()=>{handleRestore(row)}}><span><i className="fa fa-undo" style={{ width: 35, fontSize: 16, padding: 11, color: 'rgb(40, 167, 69)' }}></i></span></a>}
              <a href='#' onClick={()=>handleOnDelete(row)}><span ><i className={`fa fa-trash${row.deleted_at !=null? '-o' : ''}`} style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}></i></span></a>
              {(row.name != null) && <a href='#' onClick={()=>{toggleHandler(true, row, `${t(AppLangKeys.edit)} ${row.name}`)}}><span><i className="fa fa-pencil" style={{ width: 35, fontSize: 16, padding: 11, color: 'rgb(40, 167, 69)' }}></i></span></a>}
          </div>,
      sortable: false,
      center: true,
      width: "10%",
    },
  ];
};
