/* eslint-disable*/
import React, { useContext } from 'react';
import img from '../../../../img/Simply_Toys_logo_600x600.jpg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';

const NavBar = () => {

const {user, logOut} = useContext(AuthContext);

    const handleLogout = () => {
logOut()
.then(() => {
})
.catch( error => console.log(error))
    }

    return (
        <div>
<div className="navbar bg-blue-300">
  <div className="navbar-start">
  <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="https://i.ibb.co/r3BFYpj/Simply-Toys-logo-600x600.jpg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact font-semibold text-white bg-slate-600 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/allToys">All Toys</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        {user?.email ? <>
            <li><Link to="/addToys">Add a Toy</Link></li>
            <li><Link to="/myToys">My Toys</Link></li>
           
                <li><button onClick={handleLogout}>Log Out</button></li>  
            </> 
            : <li><Link to="/login">Login</Link></li>}
          
      </ul>
    </div>
    <img className='h-[60px] w-[90px] rounded-full' src="https://i.ibb.co/r3BFYpj/Simply-Toys-logo-600x600.jpg" alt="" />
    <a className="mx-2 normal-case text-3xl text-slate-600 font-bold">Minnion Sky</a>
  </div>
  <div className="navbar-center font-semibold hidden lg:flex">
    <ul className="menu menu-horizontal text-white px-1">
    <li><Link to="/">Home</Link></li>
        <li><Link to="/allToys">All Toys</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        {user?.email ? <>
            <li><Link to="/addToys">Add a Toy</Link></li>
            <li><Link to="/myToys">My Toys</Link></li>
                <li><button onClick={handleLogout}>Log Out</button></li> 
             
            </> 
            : <li><Link to="/login">Login</Link></li>}
   
    </ul>
  </div>
  <div className="navbar-end">
  {user &&  <div className="w-10 rounded-full">
          <img className='rounded-full justify-center text-center' src="https://i.ibb.co/Wkj4NmT/360-F-434955751-FQp-ZNPBb-MCpi-Tz-Bi-ISwj-UDWQA0o-HXc2d.jpg" />
        </div>}  
    {/* <Link to="/login" className="btn">Login</Link> */}
  </div>
</div>    
        </div>
    );
};

export default NavBar;