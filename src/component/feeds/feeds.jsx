import React from 'react'
import './feeds.css'
import Share from '../Share/Share';
import Post from '../post/post';
import { postes } from '../../DummyData'

const Feeds = () => {
  return (
    <div className='feed'>
      <div className='FeedWraper'>
        <Share />
        {postes.map((p)=>(
          <Post key={p.id} post={p}/>
        ))}
      </div>
    </div>
  )
}

export default Feeds;