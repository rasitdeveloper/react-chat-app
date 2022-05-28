import React, { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const [chat, setChat] = useState([
    // { id: 2, text: "Sana da Merhaba", isFromMe: true },
  ]);
  var today = new Date()
  var date =  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + " " + today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  const values = {
    chat,
    setChat,
    date
  };

  return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
};

export const useChat = () => {
  const context = useContext(ChatContext);

  if (context === undefined) {
    throw new Error("useChat hook must be call inside ChatcontextProvider");
  }

  return context;
};

export const useDate = () => {
  const context = useContext(ChatContext);

  if (context === undefined) {
    throw new Error("useChat hook must be call inside ChatcontextProvider");
  }

  return context;
};
