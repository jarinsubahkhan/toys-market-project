/* eslint-disable*/

import React from 'react';
import { Link } from 'react-router-dom';

const Toys = ({soft}) => {
    const { photoUrl, 
         name,
         price, 
        rating,
        category,
        _id  
    } = soft || {};
    return ( 
        <div className="card w-72 mx-auto max-w-7xl mb-4 bg-base-100 border">
  <figure className="px-5 pt-5">
    <img src={photoUrl} alt="Shoes" className="rounded-xl w-[200px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <div className='flex gap-4'>
    <p>Price : {price}</p>
    <p>Rating : {rating}</p>
    
    </div>
    <p>Category : {category}</p>
    <div className="card-actions">
      <Link to={`/details/${_id}`} className="btn border-neutral-50 bg-blue-400">View Details</Link>
    </div>
  </div>
</div>

    );
};

export default Toys;