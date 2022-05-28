import React, { useState } from "react";
import { useChat } from "../contexts/ChatContext";
import { sendMessage } from "../socketApi";

function Form() {

  var today = new Date()
  var datex =  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + " " + today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  const { setChat } = useChat();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      return;
    }

    setChat((prev) => [...prev, {text, isFromMe: true, date:datex}]);
    sendMessage(text + datex);
    setText("");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          className="message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Form;