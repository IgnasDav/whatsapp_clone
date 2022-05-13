import { useRef, useContext } from "react";
//Components
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
//Context
import ContactsContext from "../context/ContactsContext";

function NewContactsModal({ closeModal }) {
  const { createContact, contacts } = useContext(ContactsContext);
  function handleSubmit(e) {
    e.preventDefault();
    // createContact(idRef.current.value, nameRef.current.value);
    closeModal();
  }
  //className variables
  const formGroupClass = "flex flex-col mt-8";
  const formInputClass =
    "border-[1px] rounded-md border-gray-300 w-full h-10 mt-2";

  const idRef = useRef();
  const nameRef = useRef();

  return (
    <div className="relative h-full w-full">
      <div className="px-5 modal__header h-12 relative flex items-center text-lg justify-between py-10 border-[1px] border-gray-300 rounded-t-md">
        <p className="">Create Contact</p>
        <Button className={"text-black text-xl"} onClick={closeModal}>
          {" "}
          <FontAwesomeIcon icon={faXmark} />
        </Button>
      </div>
      <div className="modal__body px-5">
        <form onSubmit={handleSubmit}>
          <div className={`${formGroupClass}`}>
            <label for="id">ID</label>
            <input
              type="text"
              required
              ref={idRef}
              id="id"
              className={`${formInputClass}`}
            />
          </div>
          <div className={`${formGroupClass}`}>
            <label for="name">Name</label>
            <input
              type="text"
              required
              ref={nameRef}
              id="name"
              className={`${formInputClass}`}
            />
          </div>
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

export default NewContactsModal;
