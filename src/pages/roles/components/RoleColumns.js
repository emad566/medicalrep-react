import React from 'react';
import { useTranslation } from 'react-i18next';
import SweetAlert from 'sweetalert2';
import AppLangKeys from '../../../localization/AppLangKeys';

export const RoleColumns = (page, perPage, handleDelete, toggleHandler) => {
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
                handleDelete(row.id)
            }
        }
    );
}


return [
  {
    name: t('ID'),
    selector: (row, index) => {
        return <div>{((page-1) * perPage) + index + 1}</div>;
    },
    sortable: false,
    center: true,
    width: "5%",
  },
  {
    name: t('Name'),
    selector: (row) => row.name,
    sortable: true,
    center: false,
    width: "20%",
  },
  {
    name: t('Permissions'),
    selector: (row) => <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }} className='pt-1'>{row.permissions.map((role)=><span key={`${row.id}${role}`} className="badge rounded-pill badge-warning mb-1">{role}</span>)}</div>,
    sortable: false,
    center: false,
    width: "40%",
    class: ""
  },
  {
    name: t('Description'),
    selector: (row) => row.description,
    sortable: true,
    center: false,
    width: "15%",
  },
  
  {
    name: t('Action'),
    selector: (row) => <div key={row.id}>
            <a href='#' onClick={()=>handleOnDelete(row)}><span ><i className="fa fa-trash" style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}></i></span></a>
            <a href='#' onClick={()=>{toggleHandler(true, row, `${t(AppLangKeys.edit)} ${row.name}`)}}><span><i className="fa fa-pencil" style={{ width: 35, fontSize: 16, padding: 11, color: 'rgb(40, 167, 69)' }}></i></span></a>
        </div>,
    sortable: false,
    center: true,
    width: "10%",
  },
]};
