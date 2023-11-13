import React from 'react'
import './Profile.css'
import Feeds from '../../component/feeds/feeds'
import Rightbar from '../../component/rightbar/rightbar'
import TopNavBar from '../../component/topnavbar/topnavbar'
import Sidebar from '../../component/sidebar/sidebar'
const Profile = () => {
  return (
    <>
      <TopNavBar/>
      <div className="profile">
        <Sidebar/>
        <div className='profileRight'>
        <div className='profileRightTop'>
            <div className='profileCover'>
              <img className='profileCoverImage' src="assets/post/1.jpeg" alt="" />
              <img className='profileUserImage' src="assets/person/2.jpeg" alt="" />
            </div>
            <div className='profileInfo'>
              <h4 className='profileInfoName'>Kunal Chauhan</h4>
              <span className='profileInfoDesc'>Hello My Friends</span>
            </div>
        </div>

        <div className='profileRightBottom'>
            <Feeds/>
            <Rightbar profile/>
            </div>
        </div>
      </div>
    </>
  )
}

export default Profile