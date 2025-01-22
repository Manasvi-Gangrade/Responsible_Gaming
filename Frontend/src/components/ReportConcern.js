import React, { useState } from "react";

function ReportConcern() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    setMessages([...messages, message]);
    setMessage(""); // Clear input after sending
  };

  return (
    <div className="report-concern">
      <h2>Report a Concern</h2>
      <div className="chatbox">
        <div className="messages">
          {messages.map((msg, index) => (
            <p key={index}>{msg}</p>
          ))}
        </div>
        <textarea
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button onClick={handleSendMessage}>Send Message</button>
      </div>
    </div>
  );
}

export default ReportConcern;
