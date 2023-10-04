import React from 'react'
import './rightbar.css'

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        <div className='birthdayContainer'>
          <img className='birthdayImg' src="assets/gift.png" alt="" />
          <span className='birthdayText'> 
          <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className='rightbarAd' src="assets/ad2.jpg" alt="" />
        <h4 className='rightbarTitle'> Online Friends</h4>
        <ul className='rightbarFriendList'>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImageContiner'>
                <img className='rightbarProfileImage' src="assets/person/3.jpeg" alt="" />
                <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>Yoruichi Shihouin</span>
          </li>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImageContiner'>
                <img className='rightbarProfileImage' src="assets/person/3.jpeg" alt="" />
                <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>Yoruichi Shihouin</span>
          </li>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImageContiner'>
                <img className='rightbarProfileImage' src="assets/person/3.jpeg" alt="" />
                <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>Yoruichi Shihouin</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Rightbar;