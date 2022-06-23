import React, { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const [chat, setChat] = useState([
    // { id: 2, text: "Sana da Merhaba", isFromMe: true },
  ]);

  const [isLoading, setIsLoading] = useState(false);

  const values = {
    chat,
    setChat,
    isLoading,
    setIsLoading
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

export const useLoading = () => {
  const context = useContext(ChatContext);

  if (context === undefined) {
    throw new Error("useChat hook must be call inside ChatcontextProvider");
  }

  return context;
};