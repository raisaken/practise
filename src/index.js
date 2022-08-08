import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./ReduxToolkit/app/store";
import { Provider } from "react-redux";
import FilterItems from "./FilterItems/FilterItems";
import ZoomOnHover from "./zoomonhover/ZoomOnHover";

// import UseFetch from "./CustomHook/UseFetch";
// import Props from "./Passing event handlers as props/Props";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <FilterItems />
    {/* <Test/> */}
    {/* <Props /> */}
    <ZoomOnHover />
  </Provider>
);

reportWebVitals();
