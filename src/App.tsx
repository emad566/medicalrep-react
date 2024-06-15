import "./index.scss";
import './App.css'
import "./style.css"
import store from './store';
import { Provider } from "react-redux";
import MainRoutes from "./routes";
import { useMemo, useState } from "react";

// ** Import custom components for redux **
import { apiPost } from "./api/http";
import Routes from "./constant/Routes";
import AppCaches from "./constant/AppCaches";
import { toast } from "react-toastify";


function App() {
  const [_, setloadPermissions] = useState<any>(null);
  const token = localStorage.getItem('token') ?? "";
  if (token == "") {
    localStorage.clear();
  }


  useMemo(() => {
    async function reloadPermissions() {
      const token = localStorage.getItem('token') ?? "";
      if (token != "") {
        const responseJson = await apiPost(Routes.LOGINSYC);
        if (responseJson.status) {
          localStorage.setItem(AppCaches.role_type, responseJson.data.user_role);

          localStorage.setItem(
            AppCaches.authPermissions,
            JSON.stringify(responseJson.data.Auth_Permission)
          );
          setloadPermissions(null);
        } else {
          toast.error(responseJson.message);
        }
      }
    }
    reloadPermissions();
  }, []);


  return (
    <div className="App">
      <Provider store={store}>
        <MainRoutes />
      </Provider>
    </div>
  );
}

export default App
