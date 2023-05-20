/*eslint-disable*/
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllToy from '../AllToy/AllToy';
import { AuthContext } from '../../../providers/AuthProvider';

const AllToys = () => {
    const {user} = useContext(AuthContext);
const [toys,setToys] = useState([]);
const [searchText, setSearchText] = useState("");

useEffect(()=>{
    fetch('https://toys-marketplace-server-omega.vercel.app/allToys')
    .then(res => res.json())
    .then(data => setToys(data))
},[])

const handleSearch=()=>{
    fetch(`https://toys-marketplace-server-omega.vercel.app/toyName/${searchText}`)
    .then((res)=> res.json())
    .then((data) => {
        setToys(data)
    });
}


    return (
        // <div className='grid grid-cols-1 md:grid-cols-3 mt-12'>
        // {toys?.map((soft) => (
        //   <AllToy key={soft._id} soft={soft} ></AllToy>
        // ))}
        //       </div>
     
<div>

<div className="overflow-x-auto my-10">
                <div className='flex mx-80 my-8'>
   <input  onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Type here" className="input input-bordered input-info w-full  max-w-xs" />
   <button onClick={handleSearch} className="btn bg-blue-400 border-none ms-4">SEARCH</button>
   </div> 
  <table className="table max-w-7xl mx-auto">
    {/* head */}
    <thead>
      <tr>
        <th>Seller Name</th>
        <th>Toy Name</th>
        <th>Sub Category</th>
        <th>Price</th>
        <th>Available Quantity</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {toys?.map((soft) => (
      <tr>
         <th>{soft?.sellerName}</th>
        <td>{soft?.name}</td>
        <td>{soft?.category}</td>
        <td>{soft?.price}</td>
        <td>{soft?.quantity}</td>
        <td>
        <div className="card-actions">
             <Link to={`/details/${soft?._id}`} className="btn border-neutral-50 bg-blue-400">View Details</Link>
         </div>
        </td>
      </tr>
      ))}

      {/* row 2 */}
  
      {/* row 3 */}
   
    </tbody>
  </table>
</div>
</div>
    );
};

export default AllToys;