import React from 'react'
import { useState } from 'react';
import './LikeBtn.css'

const LikeBtn = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);

  const toggleDisplay = () => {
    if(likeCount === 0){
      setLikeCount(likeCount+1);
      setLiked(true);
    } else {
      setLikeCount(likeCount-1);
      setLiked(false);
    }
  };

  return (
    <div className='App'>
      <div className='heart-bg'>
        <div className={`heart-icon ${liked ? 'liked' : ''}`} onClick={toggleDisplay}></div>
        </div>
        {/* <div className='likes-amount'>
          {likeCount}
        </div> */}
    </div>
  )
}

export default LikeBtn
