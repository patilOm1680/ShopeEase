import React from 'react'
import "./ProdReview.css"
import CreateIcon from '@mui/icons-material/Create';
import { Rating } from '@mui/material';

import Button from '@mui/material/Button';
import ReviewCard from '../ReviewCard/ReviewCard';
function ProdReviews({ obj }) {
    const reviews = obj.reviews;
    return (
        <div className='prodReviewContainer'>
            <div className="heading">
                <h3>Customer Reviews</h3>
            </div>

            <div className='ratingContainer'>

                <div className="ratingCon">
                    <p className='ratingTitle'>{obj.rating}</p>
                    <div>
                        <Rating name="read-only" value={obj.rating} readOnly />
                        <p>Based on {obj.reviews.length} Reviews</p>

                    </div>


                </div>
                <Button variant="contained" sx={{ backgroundColor: "#2774AE", fontWeight: "bold", width: "160px", height: "35px" }} size="small"><CreateIcon sx={{ marginRight: "6px", marginLeft: "0px" }} />Write Review </Button>

            </div>
            <div className='reviewContainerCard'>
                {
                    reviews.map((obj, index) => {
                        return <ReviewCard obj={obj} index={index} />
                    })
                }


            </div>



        </div>
    )
}

export default ProdReviews
