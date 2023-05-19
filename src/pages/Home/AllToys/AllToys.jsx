/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllToy from '../AllToy/AllToy';

const AllToys = () => {
const [toys,setToys] = useState([]);

useEffect(()=>{
    fetch('http://localhost:5000/allToys')
    .then(res => res.json())
    .then(data => setToys(data))
},[])


    return (
        <div className='grid grid-cols-1 md:grid-cols-3 mt-12'>
        {toys?.map((soft) => (
          <AllToy key={soft._id} soft={soft} ></AllToy>
        ))}
              </div>
    );
};

export default AllToys;