import React, { useEffect } from "react";
import { useChat } from "../contexts/ChatContext";
import { init, subscribeToMessages } from "../socketApi";
import ChaList from "./ChaList";
import Form from "./Form";

function Container() {
  const { setChat } = useChat();

  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + " " + today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

  useEffect(() => {
    init();

    subscribeToMessages((message) => {
      console.log("callback function");
      setChat((prev) => [...prev, { text: message, date: time }]);
    });
  }, [setChat]);

  return (
    <>
      <ChaList />
      <Form />
    </>
  );
}

export default Container;
