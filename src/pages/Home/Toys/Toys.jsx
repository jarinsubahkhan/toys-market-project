/* eslint-disable*/

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { AuthContext } from '../../../providers/AuthProvider';

const Toys = ({soft}) => {
    const {user} = useContext(AuthContext);
    const { photoUrl, 
         name,
         price, 
        rating,
        category,
        _id  
    } = soft || {};

    const handleToast =() =>{
if(!user){
    alert('At first you have to login')
}
    }
    return ( 
        <div className="card w-72 mx-auto max-w-7xl mb-4 bg-base-100 border">
  <figure className="px-5 pt-5">
    <img src={photoUrl} alt="Shoes" className="rounded-xl w-[200px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <div className='flex gap-4'>
    <p>Price : {price}</p>
    <Rating style={{ maxWidth: 90 } } value={rating} readOnly/>
    
    </div>
    <p>Category : {category}</p>
    <div className="card-actions">
      <Link onClick={handleToast} to={`/details/${_id}`} className="btn border-neutral-50 bg-blue-400">View Details</Link>
    </div>
  </div>
</div>

    );
};

export default Toys;