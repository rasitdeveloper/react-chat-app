import React from "react";
import { useChat, useLoading } from "../contexts/ChatContext";
import ScrollableFeed from "react-scrollable-feed";


function ChaList() {
  const { chat } = useChat();
  const { isLoading } = useLoading();
  
  
  return (

    <div className="chat-list">
      <ScrollableFeed>
        {chat.map((item, i) => (
          <div
            key={i}
            className={`chat-item-container ${item.isFromMe ? "from-me" : ""}`}
          >
    
            <div className="chat-item">{item.text}</div>
            <div className="chat-item">{item.date}</div>
            
          </div>
        ))}
        {isLoading ? <div className="loading-item">Typing...</div> : "" }
      </ScrollableFeed>
    </div>
  );
}

export default ChaList;
