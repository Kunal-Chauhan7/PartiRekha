import React from 'react'

const Online = ({ user }) => {
    return (
        <li className='rightbarFriend'>
            <div className='rightbarProfileImageContiner'>
                <img className='rightbarProfileImage' src={user.profilePicture} alt="" />
                <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>{user.username}</span>
        </li>
    )
}

export default Online