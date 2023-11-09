import React, { useState } from 'react'
import './post.css'
import { Users } from '../../DummyData'
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Post = ({post}) => {
    const [like , setlike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false); 
    const likeHandler = ()=>{
        setlike(isLiked?like-1 : like+1)
        setIsLiked(!isLiked)
    }
    return (
        <div className='post'>
            <div className='postWrapper'>
                <div className='postTop'>
                    <div className='PostTopleft'>
                        <img src={Users.filter((u)=>u.id === post.userId)[0].profilePicture} alt="" className='PostProfileImage' />
                        <span className='PostUserName'>{Users.filter((u)=>u.id === post.userId)[0].username}</span>
                        <span className='PostDate'>{post.date}</span>

                    </div>
                    <div className='PostTopRight'>
                        <MoreVertIcon/>
                    </div>
                </div>
                <div className='postCentre'>
                    <span className='postText'>
                        {post?.desc}
                    </span>
                    <img className='postImage' src={post.photo} alt="" />
                </div>
                <div className='postButtom'>
                    <div className='postButtomLeft'>
                        <img className='likeIcon' src="assets/like.png" onClick={likeHandler} alt="" />
                        <img className='likeIcon' src="assets/heart.png" onClick={likeHandler} alt="" />
                        <span className='postLikeCounter'> {like} people like it</span>
                    </div>
                    <div className='postButtomRight'>
                        <span className='postCommentText'>{post.comment} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;