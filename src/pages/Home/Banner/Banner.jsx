/* eslint-disable*/
import React from 'react';

const Banner = () => {
    return (
<div className="carousel mt-5 w-full h-[500px]">

  <div className="carousel-item w-1/2">
    <img src="https://i.ibb.co/f9fnmJq/baby-kids-toys-banner-background-cute-teddy-bear-wooden-toy-car-colorful-bricks-blue-yellow-top-view.jpg" className="w-full" />
  </div> 
  <div className="carousel-item w-1/2 bg-blue-200">
    <div className='p-8 my-12'>
    <h2 className='font-bold text-4xl text-slate-600 text-center'>BEST TOYS FOR <br /> YOUR KID!</h2>
    <p className='font-semibold text-xl mt-6 text-slate-500 text-center'> Explore a world of fun and <br /> imagination with our vast collection of toys. <br /> From classic favorites to the latest trends, <br /> we have something for every child <br /> and the young at heart.</p>
    </div>
   
  </div> 
</div>
    );
};

export default Banner;