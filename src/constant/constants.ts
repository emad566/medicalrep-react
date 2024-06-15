import AppCaches from "./AppCaches";

export const BearerTOKEN = () =>  `Bearer ${localStorage.getItem(AppCaches.token)}`;
export const CUSTOMER = () =>  localStorage.getItem(AppCaches.customer);

export const ZidBearerTOKEN = () =>  `Bearer ${JSON.parse(`${localStorage.getItem(AppCaches.loginData)}`)['authToken']}`;
export const ZidManagerTOKEN = () =>  JSON.parse(`${localStorage.getItem(AppCaches.loginData)}`)['managerToken'];
