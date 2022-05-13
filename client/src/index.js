import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
//Context
import { LoginProvider } from "./context/LoginContext";
import { ContactsProvider } from "./context/ContactsContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoginProvider>
      <ContactsProvider>
        <App />
      </ContactsProvider>
    </LoginProvider>
  </React.StrictMode>
);
