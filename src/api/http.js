import Routes from "../constant/Routes";
import { BearerTOKEN, CUSTOMER } from "../constant/constants";


export async function loginTenant(customer, email, password){
    const fullPath = Routes.apiUrl + 'auth/login';
    const data = {customer: customer, appVersion: Routes.appVersion, email: email, password: password};
    console.log(fullPath);
    console.log(data);

    try { 
        const response = await fetch(fullPath, {
            method: "POST",
            headers: {
                "customer": customer,
                "lang": "en",
                "Content-Type": "application/json",
                accept: "application/json",
            },
            body: JSON.stringify(data) 
        });
    
        if (!response.ok) {
            console.log (response); 
            throw new Error('Failed to fetch post loginTenant');
        }

        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        return error;
    }
}


export async function apiGet(url, data ={}){
    const queryParams = new URLSearchParams(data).toString();
    const fullPath = url + '?'+queryParams;
    try {
        const response = await fetch(fullPath, {
            method: "GET",
            headers: {
                "customer": CUSTOMER(),
                "lang": "en",
                "Content-Type": "application/json",
                accept: "application/json",
                Authorization: BearerTOKEN(),
            }
        });
    
        if (!response.ok) {
            throw new Error('Failed to fetch GET ');
        }

        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        return error;
    }
}

export async function apiPost(url, data ={}){    
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "customer": CUSTOMER(),
                "lang": "en",
                "Content-Type": "application/json",
                accept: "application/json",
                Authorization: BearerTOKEN(),
            },
            body: JSON.stringify(data)
        });
    
        if (!response.ok) {
            throw new Error('Failed to fetch Delete ');
        }

        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        return error;
    }
}

export async function apiPut(url, data ={}){    
    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "customer": CUSTOMER(),
                "lang": "en",
                "Content-Type": "application/json",
                accept: "application/json",
                Authorization: BearerTOKEN(),
            },
            body: JSON.stringify(data)
        });
    
        if (!response.ok) {
            throw new Error('Failed to fetch Delete ');
        }

        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        return error;
    }
}

export async function apiDelete(url, data ={}){    
    try {
        const response = await fetch(url, {
            method: "Delete",
            headers: {
                "customer": CUSTOMER(),
                "lang": "en",
                "Content-Type": "application/json",
                accept: "application/json",
                Authorization: BearerTOKEN(),
            },
            body: JSON.stringify(data)
        });
    
        if (!response.ok) {
            throw new Error('Failed to fetch Delete ');
        }

        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        return error;
    }
}