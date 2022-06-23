import React, { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const [chat, setChat] = useState([
    // { id: 2, text: "Sana da Merhaba", isFromMe: true },
  ]);

  const [isTyping, setIsTyping] = useState(false);
  const [typingData, setTypingData] = useState();

  const values = {
    chat,
    setChat,
    isTyping,
    setIsTyping,
    typingData,
    setTypingData
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


export const useTyping = () => {
  const context = useContext(ChatContext);

  if (context === undefined) {
    throw new Error("useTyping Error");
  }

  return context;
};

export const useTypingData = () => {
  const context = useContext(ChatContext);

  if (context === undefined) {
    throw new Error("useTypingData Error");
  }

  return context;
};