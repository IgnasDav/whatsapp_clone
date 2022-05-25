import { useContext, useEffect, useState } from "react";
//Context
import ConversationsContext from "../context/ConversationsContext";

function Conversations() {
  const { conversations, selectConversationIndex } =
    useContext(ConversationsContext);
  const [active, setActive] = useState(0);
  function makeActive(e) {
    setActive(e.target.id);
  }
  //Style classes

  //We have an array off values
  //We filter the array
  //By removinng the value which is clicked on
  //And we then determine the active class which is not in the array
  const activeClass = "";
  const notActiveClass = "";
  return (
    <div className="text-lg">
      <ul>
        {conversations.map((conversation, i) => (
          <li
            id={i}
            key={i}
            onClick={(e) => {
              selectConversationIndex(i);
              makeActive(e);
              console.log(active);
            }}
            className={`px-6 py-4 border-b-2 ${
              i === active ? "bg-black" : "bg-white"
            }`}
          >
            {conversation.recipients.map((r) => r.name).join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Conversations;
