import React, { useState, useEffect } from "react";
import { useChat, useTyping } from "../contexts/ChatContext";
import { sendMessage, sendTypingInfo } from "../socketApi";
import InputEmoji from "react-input-emoji";

function Form() {

  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + " " + today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

  const { setChat } = useChat();
  const [text, setText] = useState("");

  const { setIsTyping } = useTyping();

  
  useEffect(() => {
    if(text !== "") {
      setIsTyping(true)
      sendTypingInfo("yes")
    } else {
      setIsTyping(false)
      sendTypingInfo("no")
    }
  }, [text])
  
 
  const handleSubmit = (e) => {

    if (!text) {
      return;
    }

    setChat((prev) => [...prev, { text, isFromMe: true, date: time }]);
    sendMessage(text);
    setText("");
  };

  return (
    <div className="form-container">
      <InputEmoji
          value={text}
          onChange={setText}
          cleanOnEnter
          onEnter={handleSubmit}
          placeholder="Type a message"
        />
    </div>
  );
}

export default Form;
