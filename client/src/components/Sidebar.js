import { useCallback, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
//Context
import LoginContext from "../context/LoginContext";
//Components
import Conversations from "./Conversations";
import Contacts from "./Contacts";
import Button from "./Button";
import Modal from "./Modal";
import NewContactsModal from "./NewContactsModal";
import NewConversationModal from "./NewConversationModal";

function Sidebar() {
  const { id } = useContext(LoginContext);
  const CONVERSATIONS_KEY = "conversations";
  const CONTACTS_KEY = "contacts";
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);
  const [modalOpen, setModalOpen] = useState(false);
  const articleStyle = "overflow-auto border-r-2 grow border-slate-200";
  const linkStyle =
    "translate-y-[2px] py-4 px-8 border-transparent border-2 hover:border-slate-200 transition-all duration-500 hover:text-cyan-700 hover:cursor-pointer";
  const activeLinkStyle =
    "translate-y-[2px] py-4 px-8 border-2 text-black border-b-white border-slate-200 hover:cursor-pointer";
  function setActive(e) {
    setActiveKey(e.target.id);
  }
  function openModal() {
    setModalOpen(true);
  }
  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);
  const conversationOpen = activeKey === CONVERSATIONS_KEY;
  const escModal = useCallback(
    (e) => {
      if (e.keyCode === 27 && modalOpen === true) {
        closeModal();
      }
    },
    [closeModal, modalOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", escModal);
  }, [escModal]);

  return (
    <header className="w-[340px] h-screen flex flex-col">
      <nav>
        <ul className="box-border text-lg text-cyan-600 flex border-slate-200 border-b-2 w-[340px] pl-3">
          <li
            className={
              activeKey === CONVERSATIONS_KEY
                ? `${activeLinkStyle}`
                : `${linkStyle}`
            }
            onClick={setActive}
            id={CONVERSATIONS_KEY}
          >
            <Link to={"#"} id={CONVERSATIONS_KEY}>
              Conversations
            </Link>
          </li>
          <li
            className={
              activeKey === CONTACTS_KEY ? `${activeLinkStyle}` : `${linkStyle}`
            }
            onClick={setActive}
            id={CONTACTS_KEY}
          >
            <Link to={"#"} id={CONTACTS_KEY}>
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
      {activeKey === CONTACTS_KEY ? (
        <article id={CONTACTS_KEY} className={articleStyle}>
          <Contacts />
        </article>
      ) : (
        <article id={CONVERSATIONS_KEY} className={articleStyle}>
          <Conversations />
        </article>
      )}
      <div className="p-2 border-t-2 border-r-2 text-sm">
        Your ID: <span className="text-slate-600">{id}</span>
      </div>
      <Button className="bg-sky-600 rounded-none" onClick={openModal}>
        New {conversationOpen ? "Conversation" : "Contact"}
      </Button>
      <Modal
        setModalOpen={setModalOpen}
        show={modalOpen}
        closeModal={closeModal}
      >
        {conversationOpen ? (
          <NewConversationModal closeModal={closeModal} />
        ) : (
          <NewContactsModal closeModal={closeModal} />
        )}
      </Modal>
    </header>
  );
}
export default Sidebar;
