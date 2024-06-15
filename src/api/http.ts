import AppPaths from "../constant/AppPaths";
import Routes from "../constant/Routes";
import { BearerTOKEN, CUSTOMER } from "../constant/constants";

export async function loginTenant(
  customer: string,
  email: string,
  password: string
) {
  const fullPath = Routes.apiUrl + "auth/login";
  try {
    const response = await fetch(fullPath, {
      method: "POST",
      headers: {
        customer: customer,
        lang: "en",
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        appVersion: Routes.appVersion,
        email: email,
        password: password,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch post loginTenant");
    }

    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return error;
  }
}

export async function apiGetFile(url: string, data = {}, fileName = "") {
  const queryParams = new URLSearchParams(data).toString();
  const fullPath = url + "?" + queryParams;
  try {
    const response = await fetch(fullPath, {
      method: "GET",
      headers: {
        customer: `${CUSTOMER()}`,
        lang: "en",
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: BearerTOKEN(),
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch GET ");
    }

    const contentType = response.headers.get("Content-Type");

    if (contentType && contentType.startsWith("application/")) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");

      const contentDisposition = response.headers.get("Content-Disposition");
      let originalFilename = fileName;

      if (contentDisposition && fileName == "") {
        const match = contentDisposition.match(/filename="([^"]+)"/);
        if (match) {
          originalFilename = match[1];
        }
      }

      link.href = url;
      link.setAttribute("download", originalFilename); // Set desired filename
      link.click();
      window.URL.revokeObjectURL(url); // Clean up the object URL
      // return;
    } else {
      return response.json(); // Parse as JSON
    }
  } catch (error) {
    return error;
  }
}

export async function apiGet(url: string, data = {}) {
  const queryParams = new URLSearchParams(data).toString();
  const fullPath = url + "?" + queryParams;

  try {
    const response = await fetch(fullPath, {
      method: "GET",
      headers: {
        customer: `${CUSTOMER()}`,
        lang: "en",
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: BearerTOKEN(),
      },
    });

    const responseJson = await response.json();
    if (!response.ok) {
      if (responseJson.message == "Unauthenticated.") {
        localStorage.clear();
        window.location.replace(AppPaths.login);
      }

      throw new Error("Failed to fetch GET ");
    }

    if (!responseJson.status && responseJson.data?.unAuth == 1) {
      window.location.replace(AppPaths.home);
    }

    return responseJson;
  } catch (error) {
    return error;
  }
}

export async function apiPost(url: string, data = {}) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        customer: `${CUSTOMER()}`,
        lang: "en",
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: BearerTOKEN(),
      },
      body: JSON.stringify(data),
    });

    const responseJson = await response.json();
    if (!response.ok) {
      if (responseJson.message == "Unauthenticated.") {
        localStorage.clear();
        window.location.replace(AppPaths.login);
      }

      throw new Error("Failed to fetch Post ");
    }

    if (!responseJson.status && responseJson.data?.unAuth == 1) {
      window.location.replace(AppPaths.home);
    }

    return responseJson;
  } catch (error) {
    return error;
  }
}

export async function apiPut(url: string, data = {}) {
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        customer: `${CUSTOMER()}`,
        lang: "en",
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: BearerTOKEN(),
      },
      body: JSON.stringify(data),
    });

    const responseJson = await response.json();
    if (!response.ok) {
      if (responseJson.message == "Unauthenticated.") {
        localStorage.clear();
        window.location.replace(AppPaths.login);
      }

      throw new Error("Failed to fetch Put ");
    }

    if (!responseJson.status && responseJson.data?.unAuth == 1) {
      window.location.replace(AppPaths.home);
    }

    return responseJson;
  } catch (error) {
    return error;
  }
}

export async function apiDelete(url: string, data = {}) {
  try {
    const response = await fetch(url, {
      method: "Delete",
      headers: {
        customer: `${CUSTOMER()}`,
        lang: "en",
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: BearerTOKEN(),
      },
      body: JSON.stringify(data),
    });

    const responseJson = await response.json();
    if (!response.ok) {
      if (responseJson.message == "Unauthenticated.") {
        localStorage.clear();
        window.location.replace(AppPaths.login);
      }

      throw new Error("Failed to fetch Delete ");
    }

    if (!responseJson.status && responseJson.data?.unAuth == 1) {
      window.location.replace(AppPaths.home);
    }

    return responseJson;
  } catch (error) {
    return error;
  }
}
