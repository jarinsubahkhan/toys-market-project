/* eslint-disable*/
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email= form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;

        console.log(name, email, password, photoUrl)

        createUser(email,password)
        .then(result => {
            const user = result.user;
        })
        .catch(error => console.log(error))
    }
    


    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                <h1 className="text-4xl font-bold">Please Register!</h1>
                <p className="py-6 text-2xl font-medium text-blue-400">Simply put, we are the best toymakers in the world. </p>
                <iframe  src="https://embed.lottiefiles.com/animation/119048"></iframe>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
<form onSubmit={handleRegister}>
<div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" />
                    </div>
<div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="url" name='photoUrl' placeholder="photoUrl" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                       <input className="btn btn-primary bg-slate-700" type="submit" value="Register" />
                    </div>
                    <label className="label mt-2">
                            <a href="#" className="label-text-alt link link-hover">Already have an account? Please <Link className='text-blue-400 font-bold' to="/login"> Login</Link></a>
                        </label>
             
</form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Register;