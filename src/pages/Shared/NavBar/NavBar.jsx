/* eslint-disable*/
import React from 'react';
import img from '../../../../img/Simply_Toys_logo_600x600.jpg'
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <div>
<div className="navbar bg-blue-300">
  <div className="navbar-start">
  <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact font-semibold text-white dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to="/">Home</Link></li>
        <li><a>All Toys</a></li>
        <li><a>My Toys</a></li>
        <li><a>Add a Toy</a></li>
        <li><a>Blogs</a></li>
      </ul>
    </div>
    <img className='h-[60px] w-[90px] rounded-full' src={img} alt="" />
    <a className="mx-2 normal-case text-3xl text-slate-600 font-bold">Fuzzy Wuzzy</a>
  </div>
  <div className="navbar-center font-semibold hidden lg:flex">
    <ul className="menu menu-horizontal text-white px-1">
    <li><Link to="/">Home</Link></li>
        <li><a>All Toys</a></li>
        <li><a>My Toys</a></li>
        <li><a>Add a Toy</a></li>
        <li><a>Blogs</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Login</a>
  </div>
</div>    
        </div>
    );
};

export default NavBar;