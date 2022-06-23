import React, { useEffect } from "react";
import { useChat, useTyping, useTypingData } from "../contexts/ChatContext";
import { init, subscribeToMessages, subscribeToTyping } from "../socketApi";
import ChaList from "./ChaList";
import Form from "./Form";

function Container() {
  const { setChat } = useChat();
  const { setIsTyping } = useTyping();
  const { setTypingData } = useTypingData();

  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + " " + today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

  useEffect(() => {
    init();

    subscribeToMessages((message) => {
      console.log("x callback function");
      setChat((prev) => [...prev, { text: message, date: time }]);
    });

  }, [setChat]);

  
  useEffect(() => {

    subscribeToTyping((message) => {
      console.log("y callback function");
      setTypingData(message);
    });

  }, [setIsTyping])
  

  return (
    <>
      <ChaList />
      <Form />
    </>
  );
}

export default Container;
