import React from "react";

const ReviewTest =({review})=>{
    return (
        <div>
		
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
  <div class="card-body">
  <div class="avatar">
  <div class="w-36 rounded-full mx-auto">
    <img src={review.img} alt="" />
    
  </div>
</div >
<div className="text-center">
<h4 className="text-info font-bold">Name:{review.name}</h4>
    <h4 className="text-warning font-bold">Ratings: {review.ratings}</h4>
    <p>{review.description}</p>
</div>
    
  </div>
</div>
        </div>
    );
};

export default ReviewTest;

