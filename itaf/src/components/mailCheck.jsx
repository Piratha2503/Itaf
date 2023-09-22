import axios from "axios";
import React, { useEffect, useState } from "react";

function Emailcheck() {
    const[messages,setMessages] = useState("Hello");
  useEffect(()=>{
    const mailcheck = async ()=>
    {
      const checking = await axios.get('http://localhost:8092/automation-framework/api/v1/companyUsers?page=0&size=5&direction=DESC&sortField=updatedAt');
      setMessages(checking.data.result.companyUsers);
    }
    mailcheck();
  },[])
  console.log(messages);
  return (
    <div>
      <h1>Messages:</h1>
      <ul>
        {Array.isArray(messages) && messages.length > 0 ? (
          messages.map((message) => (
            <li key={message.id}>{message.companyUsers}</li>
          ))
        ) : (
          <li>No messages available.</li>
        )}
      </ul>
    </div>
  );
}
export default Emailcheck;