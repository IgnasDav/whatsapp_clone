import { useContext } from "react";
//Context
import ContactsContext from "../context/ContactsContext";

function Contacts() {
  const { contacts } = useContext(ContactsContext);

  return (
    <div className="text-lg">
      <ul>
        {contacts.map((contact) => (
          <li className="px-6 py-4 border-b-2" key={contact.id}>
            {contact.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Contacts;
