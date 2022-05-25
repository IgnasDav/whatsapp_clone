import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import ContactsContext from "./ContactsContext";
const CONVERSATIONS = [];

const ConversationsContext = createContext({
  conversations: CONVERSATIONS,
});

const ConversationsProvider = ({ children }) => {
  const [conversations, setConversations] = useLocalStorage(
    "conversations",
    []
  );
  const [selectConversationIndex, setSelectConversationIndex] = useState(0);
  const { contacts } = useContext(ContactsContext);

  function createConversation(recipients) {
    setConversations((prevConversations) => {
      return [...prevConversations, { recipients, messages: [] }];
    });
  }

  const formattedConversations = conversations.map((conversation, index) => {
    console.log(conversation);
    const recipients = conversation.recipients.map((recipient) => {
      const contact = contacts.find((contact) => contact.id === recipient);
      const name = (contact && contact.name) || recipient;
      return { id: recipient, name };
    });
    const selected = index === selectConversationIndex;
    return { ...conversation, recipients, selected };
  });

  const value = {
    conversations: formattedConversations,
    createConversation,
    selectConversationIndex: setSelectConversationIndex,
  };

  return (
    <ConversationsContext.Provider value={value}>
      {children}
    </ConversationsContext.Provider>
  );
};
export default ConversationsContext;
export { ConversationsProvider };
