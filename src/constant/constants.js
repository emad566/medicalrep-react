import AppCaches from "./AppCaches";

export const BearerTOKEN = () =>  `Bearer ${localStorage.getItem(AppCaches.token)}`;
export const CUSTOMER = () =>  localStorage.getItem(AppCaches.customer);
