import React from 'react'
import "./Closefriends.css"

const Closefriends = ({user}) => {
    return (
        <li className="sidebarfriend">
            <img src={user.profilePicture} alt="" className="sidebarfriendimg" />
            <span className="sidebarfrontname">{user.username}</span>
        </li>
    )
}

export default Closefriends