import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
const CONTACTS = [];

const ContactsContext = createContext({
  contacts: CONTACTS,
});

const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useLocalStorage("contacts", []);
  function createContact(id, name) {
    setContacts((prevContacts) => {
      return [...prevContacts, { id, name }];
    });
  }
  return (
    <ContactsContext.Provider value={{ contacts, createContact }}>
      {children}
    </ContactsContext.Provider>
  );
};
export default ContactsContext;
export { ContactsProvider };
