import { createContext, useContext } from "react";
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

  const { contacts } = useContext(ContactsContext);

  function createConversation(recipients) {
    setConversations((prevConversations) => {
      return [...prevConversations, { recipients, messages: [] }];
    });
  }

  const formattedConversations = conversations.map((conversation) => {
    console.log(conversation);
    const recipients = conversation.recipients.map((recipient) => {
      const contact = contacts.find((contact) => contact.id === recipient);
      const name = (contact && contact.name) || recipient;
      return { id: recipient, name };
    });
    return { ...conversation, recipients };
  });

  const value = {
    conversations: formattedConversations,
    createConversation,
  };

  return (
    <ConversationsContext.Provider value={value}>
      {children}
    </ConversationsContext.Provider>
  );
};
export default ConversationsContext;
export { ConversationsProvider };
