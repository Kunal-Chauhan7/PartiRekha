import React from 'react'
import './rightbar.css'
import { Users } from '../../DummyData'
import Online from '../Online/Online'

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
          {
            Users.map((u)=>(
              <Online key={u.id} user={u} />
            ))
          }
        </ul>
      </div>
    </div>
  )
}
export default Rightbar;