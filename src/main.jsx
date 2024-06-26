import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer, Zoom } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <ToastContainer
      position="top-right"
      autoClose={500}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
      theme="light"
      transition={Zoom}
    />
  </React.StrictMode>
);
