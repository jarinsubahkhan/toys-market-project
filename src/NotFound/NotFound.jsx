/* eslint-disable*/
import React from 'react';
import './NotFound.css'
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
<div className='body'>
<div className="container">
        <div className="image">
        <iframe src="https://embed.lottiefiles.com/animation/95560"></iframe>
        </div>
        <h1 className='text-2xl font-semibold text-blue-500'>Error 404</h1>
        <p className='text-xl font-medium text-slate-500 mt-5'>Oops! The page you're looking for doesn't exist.</p>
        <Link to="/">
        <button className='button'>Back to Home</button>  
        </Link>
    
       </div>
</div>
    );
};

export default NotFound;