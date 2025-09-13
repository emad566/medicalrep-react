const DOMAIN = "https://visitpro.emadw3.com/";
const apiUrl = `${DOMAIN}api/`;

export default {
  appVersion: "4.1.6",
  apiUrl: apiUrl,
  ROLES: `${apiUrl}roles`,
  PERMISSIONS: `${apiUrl}permissions`,
  USERS: `${apiUrl}users`,
  SETTINGS: `${apiUrl}settings`,
  LOGOUT: `${apiUrl}users/logout`,
  LOGINSYC: `${apiUrl}auth/loginsync`,
  profile: `${apiUrl}users/profile`,
  CompanyProducts: `${apiUrl}CompanyProducts`,
  CompanyProduct: `${apiUrl}CompanyProduct`,
  uploadCsv: `${apiUrl}CompanyProduct/uploadCsv`,
  updateTotal: `${apiUrl}CompanyProduct/updateTotal`,
  visits: `${apiUrl}visits`,
  specialists: `${apiUrl}specialists`,
  usersVisitsStatistics: `${apiUrl}reports/users-visits-statistics`,
};
