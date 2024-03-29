import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./style.css"
import i18n from "./i18n";
import * as serviceWorker from "./serviceWorker";
import { I18nextProvider } from 'react-i18next';

// ** Import custom components for redux **
import { Provider } from "react-redux";
import store from "./store";
import MainRoutes from "./routes";

const Root = () => {


  return (
    <div className="App">
      <Provider store={store}>
        <MainRoutes />
      </Provider>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <I18nextProvider i18n={i18n}>
        <Root />
  </I18nextProvider>
);

serviceWorker.unregister();
