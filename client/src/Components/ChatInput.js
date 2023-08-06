import { useState } from "react";

const ChatInput = () => {
    const [textarea, setTextArea] = useState("");
    return (
        <div className="chat-input">
        <textarea value={textarea} onChange={(e)=> setTextArea(e.target.value)}/>
        <button className="secondary-button">submit</button>
        </div> 
    )
}

export default ChatInput;