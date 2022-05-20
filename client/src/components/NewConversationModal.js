import { useRef, useContext, useState } from "react";
//Components
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
//Context
import ContactsContext from "../context/ContactsContext";
import ConversationsContext from "../context/ConversationsContext";

function NewConversationModal({ closeModal }) {
  const { contacts } = useContext(ContactsContext);
  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const { createConversation } = useContext(ConversationsContext);

  function handleCheckboxChange(contactId) {
    setSelectedContactIds((prevSelectedContactIds) => {
      if (prevSelectedContactIds.includes(contactId)) {
        return prevSelectedContactIds.filter((prevId) => contactId !== prevId);
      } else {
        return [...prevSelectedContactIds, contactId];
      }
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    createConversation(selectedContactIds);
    closeModal();
  }
  const idRef = useRef();
  const nameRef = useRef();

  return (
    <div className="relative h-full w-full">
      <div className="px-5 modal__header h-12 relative flex items-center text-lg justify-between py-10 border-[1px] border-gray-300 rounded-t-md">
        <p className="">Create Conversation</p>
        <Button className={"text-black text-xl"} onClick={closeModal}>
          {" "}
          <FontAwesomeIcon icon={faXmark} />
        </Button>
      </div>
      <div className="modal__body px-5">
        <form onSubmit={handleSubmit}>
          {contacts.map((contact) => (
            <div key={contact.id} className="pt-4">
              <input
                id={contact.id}
                type={"checkbox"}
                value={selectedContactIds.includes(contact.id)}
                label={contact.name}
                onChange={() => handleCheckboxChange(contact.id)}
                className="mr-2"
              />
              <label htmlFor={contact.id}>{contact.name}</label>
            </div>
          ))}
          <Button
            type={"submit"}
            className={"bg-sky-600 mt-8 hover:bg-sky-700 "}
          >
            Create
          </Button>
        </form>
      </div>
    </div>
  );
}

export default NewConversationModal;
