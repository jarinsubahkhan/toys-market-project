/* eslint-disable*/
import React, { useContext, useState} from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../providers/AuthProvider';
import './AddToy.css'

const AddToy = () => {
    const { user } = useContext(AuthContext);
    // const [selectedOption, setSelectedOption] = useState(null);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => {

        fetch("https://toys-marketplace-server-omega.vercel.app/postToys", {
            method: "POST",
            headers: { 'Content-Type':'application/json'},
            body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
        })
       console.log(data)}

    return (

        <div className="add-job-container">
        <div className="add-job row">
          <div className="col-md-8">
            <form onSubmit={handleSubmit(onSubmit)}>
               {errors.exampleRequired && <span>This field is required</span>} 
              <input
                className="text-input"
                {...register("name", { required: true })}
                placeholder="toy name"
              />
  
              <input
                className="text-input"
                {...register("price", { required: true })}
                placeholder="price"
               
              />
               <input
              className="text-input"
              {...register("quantity", { required: true })}
              placeholder="quantity"
              type="number"
            />
              <input
                className="text-input"
                {...register("rating", { required: true })}
                placeholder="rating"
               
              />
        
              {/* <select className="text-input" {...register("category")}>
                <option value="Engineering">engineering</option>
                <option value="Editor">Editor</option>
                <option value="writer">Writer</option>
                <option value="Developer">Developer</option>
              </select> */}
              <select className="text-input" {...register("category")}>
              <option value="">choose</option>
                <option value="animal">Animal</option>
                <option value="character">Character</option>
                <option value="fantasy">Fantasy</option>
              </select>
              <input
                className="text-input"
                {...register("photoUrl")}
                placeholder="photoUrl"
                type="url"
              />
              {/* <input
                className="text-input"
                {...register("deadline")}
                placeholder="deadline"
                type="date"
              /> */}
              <input
                className="text-input"
                 value={user?.email}
                {...register("email")}
                placeholder="your email"
                type="email"
              />
              <input
                className="text-input"
                {...register("sellerName")}
                placeholder="seller name"
                type="text"
              />
                {/* <input
                className="text-input"
                // value={user?.email}
                {...register("name")}
                placeholder="your name"
                type="name"
              />   */}
               <input
                className="text-input"
                {...register("description")}
                placeholder="description"
              /> 
         <input className='submit-btn' type="submit" value="Add a toy" />
            </form>
          </div>
          {/* <div className="col-md-4">
            <img
              className="w-100"
              src="https://i.ibb.co/rthZ75K/pngtree-job-vacancy-with-join-our-team-recruitment-vector-design-png-image-6419066-removebg-preview.png"
              alt=""
            />
          </div> */}
        </div>
      </div>
    );
};

export default AddToy;