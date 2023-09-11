import React from 'react'
import './feeds.css'
import Share from '../Share/Share';
import Post from '../post/post';

const Feeds = () => {
  return (
 <div className='feed'>
  <div className='FeedWraper'>
    <Share/>
    <Post/>
  </div>
 </div>
  )
}

export default Feeds;