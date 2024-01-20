// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Global from "./css/common.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/rentNroll">
    <Provider store={store}>
      <App />
      <Global />
    </Provider>
  </BrowserRouter>
);
