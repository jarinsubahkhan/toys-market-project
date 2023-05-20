/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

import ModalUpdate from '../ModalUpdate/ModalUpdate';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const MyToys = () => {
    const {user} = useContext(AuthContext);
const [userToy, setUserToy] = useState([]);
const [searchText, setSearchText] = useState("");
const [modalShow, setModalShow] = React.useState(false);

useEffect(()=>{
fetch(`https://toys-marketplace-server-omega.vercel.app/myToys/${user?.email}`)
.then(res => res.json())
.then(data =>{
    setUserToy(data);
})
}, [user]);

useEffect(()=>{

}, []);

const handleSearch=()=>{
    fetch(`https://toys-marketplace-server-omega.vercel.app/toyName/${searchText}`)
    .then((res)=> res.json())
    .then((data) => {
        setUserToy(data)
    });
}

const handleDelete = id => {
    const proceed = confirm('Do you want to delete?')
    if(proceed){
fetch(`https://toys-marketplace-server-omega.vercel.app/toys/${id}`,{
    method: 'DELETE'
})
.then(res => res.json())
.then(data => {
    console.log(data);
if(data.deletedCount > 0){
    alert('deleted successfully');
    const remaining = userToy.filter(toy => toy._id !== id);
    setUserToy(remaining);
}
})
    }
}

// const handleToyUpdate = id =>{
//     fetch(`https://toys-marketplace-server-omega.vercel.app/toys/${id}`, {
// method: 'PATCH',
// header: {
// 'content-type':'application/json',
// },
// body: JSON.stringify({status: 'confirm'})
//     })   
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         if(data.modifiedCount > 0){
// const remaining = userToy.filter(toy => toy._id !== id);
// const updated = userToy.find(toy => toy._id === id);
// updated.status = 'confirm'
// const newToy = [updated, ...remaining];
// setUserToy(newToy);
//         }
//     })
// }

    return (
        <div className='p-10'>
   <h2 className='text-center text-4xl mb-4 text-slate-700 font-bold'>My Toys</h2>  
   <div className='flex mx-80 my-8'>
   <input   onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Type here" className="input input-bordered input-info w-full  max-w-xs" />
   <button onClick={handleSearch} className="btn bg-blue-400 border-none ms-4">SEARCH</button>
   </div>
   <div className="overflow-x-auto w-full">
  <table className="table w-full text-slate-600">
    {/* head */}
    <thead className=''>
      <tr className=''>
        <th>
          <th>No.</th>
        </th>
        <th>Toy-Name</th> 
        <th>Category</th>
        <th>Price</th>
        <th>Email</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {userToy?.map((toy, index) => (
             <tr>
     <td>{index + 1}</td>
     <td>
     <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={toy?.photoUrl} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{toy?.name}</div>
              <div className="text-sm opacity-50">{toy?.description}</div>
            </div>
          </div>
        </td>
     </td>
     <td>{toy?.category}</td>
     <td>{toy?.price}</td>
     <td>{toy?.email}</td>
     <td><Link to={`/updateToys/${toy?._id}`} className='bg-blue-300 p-3 rounded-lg font-bold text-slate-600'>Update</Link></td>
     <td><button  onClick={() => handleDelete(toy?._id)} className='bg-blue-300 p-3 rounded-lg font-bold text-slate-600'>Delete</button></td>
       
             </tr>     
            ))}

    
    </tbody>
    {/* foot */}
    <tfoot>
     
    </tfoot>
    
  </table>
</div>       
        </div>
    );
};

export default MyToys;