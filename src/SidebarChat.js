import { Avatar } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import './SidebarChat.css'

function Sidebarchat({ addNewChat }) {

    const [seed, setSeed] = useState('')

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, []);

    const createChat = () => {
        const roomName = prompt("please enter name for the chatroom");
        if (roomName) {
            //do some clever database stuff...
        }
    };

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
            <div className="sidebarChat__info">
                <h2>Room name</h2>
                <p>Last massage...</p>
            </div>
        </div>
    ) : (
            <div onClick={createChat}
                className="sidebarChat">
                <h2>add new Chat</h2>
            </div>
        );
}

export default Sidebarchat
