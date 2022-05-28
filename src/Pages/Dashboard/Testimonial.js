import React from "react";
import ReviewTest from "./ReviewTest";

const Testimonial =()=>{
    const reviews = [
        {
            _id:1,
            name: 'Winson Herry',
            ratings: '5 Star',
            description: 'Tools Gallery is a great trust for us.',
            img: "https://i.ibb.co/HB41DF4/images-4.jpg"
        },
        {
            _id:2,
            name: 'Willium John',
            ratings: '5 Star',
            description: 'It is genuine in service and quality',
            img: "https://i.ibb.co/7Yctz6h/images-1.jpg"
        },
        {
            _id:3,
            name: 'Winston Cerry',
            ratings: '5 Star',
            description: 'Tools gallery is innovative and awesome.',
            img: "https://i.ibb.co/KhDLQC3/images.jpg"
        },
    ];
    return (
        <div className="my-10">
		<h1 className="text-2xl text-info font-bold text-center"> Customer Review</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {
           reviews.map(review =><ReviewTest
           key={review._id}
           review={review}></ReviewTest>)
       }
      </div>
        </div>
    );
};

export default Testimonial;
