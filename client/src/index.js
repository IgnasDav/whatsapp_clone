import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
//Context
import { LoginProvider } from "./context/LoginContext";
import { ContactsProvider } from "./context/ContactsContext";
import { ConversationsProvider } from "./context/ConversationsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <LoginProvider>
      <ContactsProvider>
        <ConversationsProvider>
          <App />
        </ConversationsProvider>
      </ContactsProvider>
    </LoginProvider>
  </React.StrictMode>
);
