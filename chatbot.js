// components/Chatbot.js
import React, { useState } from "react";

function Chatbot() {
  const [messages, setMessages] = useState([]);

  const sendMessage = (msg) => {
    let reply = "I can help you find products!";

    if (msg.includes("watch")) reply = "Check out our Elegant Watch!";
    if (msg.includes("price")) reply = "Prices are shown on product cards.";

    setMessages([...messages, { user: msg }, { bot: reply }]);
  };

  return (
    <div className="chatbox">
      <button onClick={() => sendMessage("watch")}>Ask</button>
      {messages.map((m, i) => (
        <p key={i}>{m.user || m.bot}</p>
      ))}
    </div>
  );
}

export default Chatbot;
