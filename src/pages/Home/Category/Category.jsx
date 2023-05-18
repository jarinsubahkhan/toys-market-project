/* eslint-disable*/
import React, { useState } from 'react';

const Category = () => {
    const [activeTab, setActiveTab] = useState("animal");

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
              className={`tab tab-bordered tab2 animal font-semibold text-2xl text-slate-600 ${
                activeTab == "animal" ? " bg-blue-300 text-white tab-active" : ""
              }`}
            >
              Animal
            </div>
            <div
              onClick={() => handleTabClick("character")}
              className={`tab tab-bordered tab2 character font-semibold text-2xl text-slate-600 ${
                activeTab == "character" ? " bg-blue-300 text-white tab-active" : ""
              }`}
            >
             Character
            </div>
            <div
              onClick={() => handleTabClick("fantasy")}
              className={`tab tab-bordered tab2 fantasy font-semibold text-2xl text-slate-600 ${
                activeTab == "fantasy" ? " bg-blue-300 text-white tab-active" : ""
              }`}
            >
              Fantasy
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Category;