import React from 'react'
import './rightbar.css'
import { Users } from '../../DummyData'
import Online from '../Online/Online'

const Rightbar = ({profile}) => {
  const HomeRightBar = () => {
    return(
      <>
      <div className='birthdayContainer'>
          <img className='birthdayImg' src="assets/gift.png" alt="" />
          <span className='birthdayText'> 
          <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className='rightbarAd' src="assets/ad2.jpg" alt="" />
        <h4 className='rightbarTitle'> Online Friends</h4>
        <ul className='rightbarFriendList'>
          {
            Users.map((u)=>(
              <Online key={u.id} user={u} />
            ))
          }
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
      <h4 className='rightbarTitle'>User info</h4>
      <div className='rightbarInfo'>
        <div className='rightbarInfoItem'>
          <span className='rightbarInfoKey'>City : </span>
          <span className='rightbarInfoValue'>New York</span>
        </div>
        <div className='rightbarInfoItem'>
          <span className='rightbarInfoKey'>From : </span>
          <span className='rightbarInfoValue'>India</span>
        </div>
        <div className='rightbarInfoItem'>
          <span className='rightbarInfoKey'>RelationShip : </span>
          <span className='rightbarInfoValue'>Single</span>
        </div>
      </div>
      <h4 className='rightbarTitle'>User Friends</h4>
      <div className='rightbarFollowings'>
        <div className='rightbarFollowing'>
          <img src="assets/person/eren.jpg" alt="" className='rightbarFollowingImg'/>
          <span className='rightbarFollowingName'>Eren Jager</span>
        </div>
        <div className='rightbarFollowing'>
          <img src="assets/person/papa.jpg" alt="" className='rightbarFollowingImg'/>
          <span className='rightbarFollowingName'>Mr Pardeep Chauhan</span>
        </div>
        <div className='rightbarFollowing'>
          <img src="assets/person/3.jpeg" alt="" className='rightbarFollowingImg'/>
          <span className='rightbarFollowingName'>Eren Jager</span>
        </div>
        <div className='rightbarFollowing'>
          <img src="assets/person/4.jpeg" alt="" className='rightbarFollowingImg'/>
          <span className='rightbarFollowingName'>Eren Jager</span>
        </div>
        <div className='rightbarFollowing'>
          <img src="assets/person/1.jpeg" alt="" className='rightbarFollowingImg'/>
          <span className='rightbarFollowingName'>Eren Jager</span>
        </div>
        <div className='rightbarFollowing'>
          <img src="assets/person/5.jpeg" alt="" className='rightbarFollowingImg'/>
          <span className='rightbarFollowingName'>Eren Jager</span>
        </div>
        <div className='rightbarFollowing'>
          <img src="assets/person/6.jpeg" alt="" className='rightbarFollowingImg'/>
          <span className='rightbarFollowingName'>Eren Jager</span>
        </div>
      </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        <ProfileRightbar/>
      </div>
    </div>
  )
}
export default Rightbar;