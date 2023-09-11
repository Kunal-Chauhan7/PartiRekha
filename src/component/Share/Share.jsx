import React from 'react'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import SellIcon from '@mui/icons-material/Sell';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

import "./Share.css"

const Share = () => {
    return (
        <div className='share'>
            <div className='shareWrapper'>
                <div className='shareTop'>
                    <img className='shareProfileImg' src="assets/person/2.jpeg" alt="" />
                    <input placeholder='Whats In your Mind Kunal?' 
                    className='shareInput' />
                </div>
                <hr className='shareHr'/>
                <div className='shareButtom'>
                    <div className='shareOption'>
                        <PermMediaIcon htmlColor='tomato' className='shareicon'/>
                        <span className='shareOptionText'>Photo or Video</span>
                    </div>
                    <div className='shareOption'>
                        <SellIcon htmlColor='blue' className='shareicon'/>
                        <span className='shareOptionText'>Tag</span>
                    </div>
                    <div className='shareOption'>
                        <LocationOnIcon htmlColor='green' className='shareicon'/>
                        <span className='shareOptionText'>Location</span>
                    </div>
                    <div className='shareOption'>
                        <EmojiEmotionsIcon htmlColor='goldenrod' className='shareicon'/>
                        <span className='shareOptionText'>Feelings</span>
                    </div>
                </div>
                <button className='shareButton'>Share</button>
            </div>
        </div>
    )
}

export default Share;
