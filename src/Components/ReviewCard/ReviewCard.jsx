import React from 'react'
import "./ReviewCard.css"
import Avatar from '@mui/material/Avatar';
import avtarImg from "../../assets/Reviews/avatarImg.png"

import { Rating } from '@mui/material';
const ReviewCard = ({obj,index}) => {

  return (
    <div className='reviewCard'>
      {/* {obj.rating} */}
     <Avatar alt="Remy Sharp" src={avtarImg} className='avtarImg'/>

        <div className='content'>
            <p className='reviewerName'>{obj.reviewerName}</p>
            <Rating name="read-only" value={obj.rating} readOnly />
            <p>{obj.comment}</p>
        </div>

        <p className='time'>{index+1} month ago</p>


    </div>
  )
}

export default ReviewCard
