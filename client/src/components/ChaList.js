import React from "react";
import { useChat, useTypingData } from "../contexts/ChatContext";
import ScrollableFeed from "react-scrollable-feed";


function ChaList() {
  const { chat } = useChat();
  const { typingData } = useTypingData();
  
  
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
        {typingData === "yes" ? <div className="chat-item">Typing...</div> : "" }
        
      </ScrollableFeed>
    </div>
  );
}

export default ChaList;
