import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./ReduxToolkit/app/store";
import { Provider } from "react-redux";
import Index from "./UseRef/Timeout";
import Timeout from "./UseRef/Timeout";
import DomAccess from "./UseRef/DomAccess";
import DomAccessChildComp from "./UseRef/DomAccessChildComp";
import VideoPausePlay from "./UseRef/VideoPausePlay";
import Test from "./test/Test";
import Todo from "./UseCallback/Todo";
// import UseFetch from "./CustomHook/UseFetch";
import GetData from "./CustomHook/GetData";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Test/>
  </Provider>
);

reportWebVitals();
