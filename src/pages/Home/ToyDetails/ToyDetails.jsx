/* eslint-disable*/
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ToyDetails = () => {
const {id} = useParams();
const [detailsData, setDetailsData] = useState({});

useEffect(()=>{
    fetch(`http://localhost:5000/toys/${id}`)
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        setDetailsData(data)
    }) 
},[id])

const {photoUrl, name, sellerName, email, price, rating, quantity,description} = detailsData;

    return (
<div className='max-w-6xl mx-auto p-10 m-10'>
<div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={photoUrl} alt="Album"/></figure>
  <div className="card-body bg-blue-200">
    <h2 className="card-title text-3xl font-bold text-slate-600">{description}</h2>
    <p className='text-2xl font-semibold text-slate-600'>Toy Name : {name}</p>
    <div className='flex'>
        <p className='text-xl font-semibold text-slate-600'><small>Seller : {sellerName}</small></p>
        <p className='text-xl font-semibold text-slate-600'><small>Email : {email}</small></p>
    </div>
    <div className='flex'>
        <p><small className='text-lg font-medium text-slate-600'>Price : {price}</small></p>
        <p className='text-lg font-medium text-slate-600'><small>Quantity : {quantity}</small></p>
    </div>
    <div className="card-actions justify-end">
    <button className=" ">Rating : {rating}</button>
    </div>
  </div>
</div>
</div>
    );
};

export default ToyDetails;