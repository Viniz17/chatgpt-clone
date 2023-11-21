import React from "react"; 
import './styles/App.css';
import { Avatar } from "../../asserts/avatar";

export const ChatMessage = ({message}) => {
    <div className={
        `chat-message 
        ${message.user === 'gpt'} && 'chatgpt'`}>
            <div className="chat-message-center">
                <div className={
                    `avatar 
                    ${message.user === 'gpt' && 'chatgpt'}`}>

                    {message.user === 'gpt' && (
                        <Avatar />
                    )}

                </div>

                <div className="message">
                    {message.message}
                </div>

            </div>

    </div>
}