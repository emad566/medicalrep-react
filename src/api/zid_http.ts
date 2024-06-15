import { ZidBearerTOKEN, ZidManagerTOKEN } from "../constant/constants";

export async function zid_apiGet(url: string, data ={}){
    const queryParams = new URLSearchParams(data).toString();
    const fullPath = url + '?'+queryParams;
    
    try {
        const response = await fetch(fullPath, {
            method: "GET",
            headers: {
                "X-Manager-Token": `${ZidManagerTOKEN()}`,
                "Accept-Language": "ar",
                "Content-Type": "application/json",
                accept: "application/json",
                Authorization: ZidBearerTOKEN(),
            }
        });
    
        if (!response.ok) {
            throw new Error('Failed to fetch GET ');
        }

        return await response.json(); 
    } catch (error) {
        return error;
    }
}

export async function zid_apiPost(url: string, data ={}){    
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "X-Manager-Token": `${ZidManagerTOKEN()}`,
                "Accept-Language": "ar",
                "Content-Type": "application/json",
                accept: "application/json",
                Authorization: ZidBearerTOKEN(),
            },
            body: JSON.stringify(data)
        });
    
        if (!response.ok) {
            throw new Error('Failed to fetch Post ');
        }

        return await response.json();
    } catch (error) {
        return error;
    }
}

export async function zid_apiPut(url: string, data ={}){    
    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "X-Manager-Token": `${ZidManagerTOKEN()}`,
                "Accept-Language": "ar",
                "Content-Type": "application/json",
                accept: "application/json",
                Authorization: ZidBearerTOKEN(),
            },
            body: JSON.stringify(data)
        });
    
        if (!response.ok) {
            throw new Error('Failed to fetch Put ');
        }
        
        return await response.json();
    } catch (error) {
        return error;
    }
}

export async function zid_apiDelete(url: string, data ={}){    
    try {
        const response = await fetch(url, {
            method: "Delete",
            headers: {
                "X-Manager-Token": `${ZidManagerTOKEN()}`,
                "Accept-Language": "ar",
                "Content-Type": "application/json",
                accept: "application/json",
                Authorization: ZidBearerTOKEN(),
            },
            body: JSON.stringify(data)
        });
    
        if (!response.ok) {
            throw new Error('Failed to fetch Delete ');
        }

        
        return await response.json(); 
    } catch (error) {
        return error;
    }
}