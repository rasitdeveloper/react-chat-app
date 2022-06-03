import React, { useState, useEffect } from "react";
import { useChat, useLoading } from "../contexts/ChatContext";
import { sendMessage } from "../socketApi";
import InputEmoji from "react-input-emoji";

function Form() {

  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + " " + today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

  const { setChat } = useChat();
  const [text, setText] = useState("");

  const { setIsLoading } = useLoading();

  
  useEffect(() => {
    if(text !== "") {
      setIsLoading(true)
    } else {
      setIsLoading(false)
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
