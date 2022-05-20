import { useContext, useEffect } from "react";
//Context
import ConversationsContext from "../context/ConversationsContext";

function Conversations() {
  const { conversations } = useContext(ConversationsContext);
  useEffect(() => {
    console.log(conversations);
    conversations.forEach((c) => {
      console.log(c);
    });
  }, [conversations]);
  return (
    <div className="text-lg">
      <ul>
        {conversations.map((conversation, i) => (
          <li className="px-6 py-4 border-b-2" key={i}>
            {conversation.recipients.map((r) => r.name).join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Conversations;
