import React from 'react'
import './post.css'

import MoreVertIcon from '@mui/icons-material/MoreVert';

const Post = () => {
    return (
        <div className='post'>
            <div className='postWrapper'>
                <div className='postTop'>
                    <div className='PostTopleft'>
                        <img src="assets/person/10.jpeg" alt="" className='PostProfileImage' />
                        <span className='PostUserName'>Kunal</span>
                        <span className='PostDate'>5 mins ago</span>

                    </div>
                    <div className='PostTopRight'>
                        <MoreVertIcon/>
                    </div>
                </div>
                <div className='postCentre'>
                    <span className='postText'>
                        Hey! It's My 1st post ヾ(≧▽≦*)o 
                    </span>
                    <img className='postImage' src="assets/post/1.jpeg" alt="" />
                </div>
                <div className='postButtom'>
                    <div className='postButtomLeft'>
                        <img className='likeIcon' src="assets/like.png" alt="" />
                        <img className='likeIcon' src="assets/heart.png" alt="" />
                        <span className='postLikeCounter'> 32 people like it</span>
                    </div>
                    <div className='postButtomRight'>
                        <span className='postCommentText'>7 Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;