import AppCaches from "../../../constant/AppCaches";


export const CompanyProductColumns = (data:any, updateQuantityHandler:any): any => {

  const authPermissions = JSON.parse(
    `${localStorage.getItem(AppCaches.authPermissions)}`
  );

  function handleCan(permssions: any) {
    return permssions?.every((item: any) => authPermissions.includes(item)) ?? false;
  }

  return data.company_codes.map((company: any) => ({
    name: `${['Product_Name'].includes(company)? 'المنتج' : company}`,
    columnName: company,
    selector: (row: any) => {
      if (['Product_Name', 'Total', 'ACH'].includes(company)) {
        return row[company];
      } else {
        if(!handleCan(['Updat_Company_Product_Monthly_Report'])) return row[company];
        return (
          <input 
            onBlur={(event: React.FocusEvent<HTMLInputElement>) =>
              updateQuantityHandler(row, company, event.target.value)
            }
            onChange={(event: React.FocusEvent<HTMLInputElement>) =>
              updateQuantityHandler(row, company, event.target.value)
            }
            name={`${company}${row.Product_Name}`}
            value={row[company]}
            className="form-control"
          />
        );
      }
    },
    sortable: false,
    center: true,
    glow: 1,
    fixed: ['Product_Name'].includes(company)? 'left' : 'none'
  }));


 
};
