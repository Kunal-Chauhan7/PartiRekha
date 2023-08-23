import './top.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React from 'react'

const TopNavBar = () => {
  return (
    <div className='topbarcontainer'>
        <div className="topbarLeft">
            <span className='logo'>PartiRekha</span>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
                <SearchIcon className='searchicon'/>
                <input placeholder='Search for friend,post or video' className='searchinput'/>
            </div>
        </div>
        <div className="topbarRight">
        <div className="topbarlinks">
                <span className='topbarlink'>Hompage</span>
                <span className='topbarlink'>Timeline</span>
            </div>
        <div className='topbaricon'>
            <div className='topbariconItem'>
                <PersonIcon/>
                <span className='topbariconbadge'>1</span>
            </div>
            <div className='topbariconItem'>
                <ChatIcon/>
                <span className='topbariconbadge'>1</span>
            </div>
            <div className='topbariconItem'>
                <NotificationsIcon/>
                <span className='topbariconbadge'>1</span>
            </div>
        </div>
            <img src="assets/person/2.jpeg" alt="profile" className='topbarimg' />
        </div>
    </div>
  )
}

export default TopNavBar;