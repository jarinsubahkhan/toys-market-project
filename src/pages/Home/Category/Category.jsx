/* eslint-disable*/
import React, { useEffect, useState } from 'react';
import MyToys from '../MyToys/MyToys';
import Toys from '../Toys/Toys';

const Category = () => {
  const [categories, setCategories] = useState([]);
    const [activeTab, setActiveTab] = useState("ani");

useEffect(()=> {
  fetch(`http://localhost:5000/allToys/${activeTab}`)
  .then(res => res.json())
  .then(result => {
    setCategories(result)
  });
}, [activeTab]);

// const result = categories?.filter((soft) => soft.category == activeTab);
// console.log(result)


    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
      };
    return (
        <div className='my-8'>
       <h3 className='text-center text-4xl font-bold text-slate-600'>Shop By Category</h3> 
       {/* <div className="tabs mt-5 align-items-center text-center justify-center">
  <a className="tab tab-bordered">Tab 1</a> 
  <a className="tab tab-bordered tab-active">Tab 2</a> 
  <a className="tab tab-bordered">Tab 3</a>
</div>     */}
  <div className="tab-container text-center">
        <div className="text-center w-100 m-auto">
          <div className="tabs d-flex justify-center my-8 align-items-center">
            <div
              onClick={() => handleTabClick("animal")}
              className={`animal tab tab-bordered tab2  font-semibold text-2xl text-slate-600 ${
                activeTab == "animal" ? " bg-blue-300 text-white tab-active" : ""
              }`}
            >
              Animal
            </div>
            <div
              onClick={() => handleTabClick("character")}
              className={`character tab tab-bordered tab2  font-semibold text-2xl text-slate-600 ${
                activeTab == "character" ? " bg-blue-300 text-white tab-active" : ""
              }`}
            >
             Character
            </div>
            <div
              onClick={() => handleTabClick("fantasy")}
              className={`fantasy tab tab-bordered tab2  font-semibold text-2xl text-slate-600 ${
                activeTab == "fantasy" ? " bg-blue-300 text-white tab-active" : ""
              }`}
            >
              Fantasy
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 mt-12'>
{categories?.map((soft) => (
  <Toys key={soft._id} soft={soft} ></Toys>
))}
      </div>
        </div>
    );
};

export default Category;