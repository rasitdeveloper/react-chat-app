import React from "react";
import { useChat } from "../contexts/ChatContext";
import ScrollableFeed from "react-scrollable-feed";

function ChaList() {

  var today = new Date()
  var date =  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + " " + today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  
  const { chat } = useChat();

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
      </ScrollableFeed>
    </div>
  );
}

export default ChaList;
