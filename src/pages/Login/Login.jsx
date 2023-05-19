/* eslint-disable*/
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../providers/AuthProvider';
const Login = () => {

    const {signIn, googleSignIn} = useContext(AuthContext);

const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email= form.email.value;
    const password = form.password.value;

    console.log( email, password)
    signIn(email, password)
    .then(result => {
        const user = result.user;
        console.log(user);
    })
    .catch(error => console.log(error));
}

const handleGoogleSignIn = () => {
    // Handle Google sign-in logic here
       googleSignIn()
            .then(result => {
    console.log(result.user);
            })
            .catch(error => console.log(error))   
  };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold">Please Login!</h1>
                    <p className="py-6 text-2xl font-medium text-blue-400">Simply put, we are the best toymakers in the world. </p>
                    <iframe  src="https://embed.lottiefiles.com/animation/119048"></iframe>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
<form onSubmit={handleLogin}>
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
                        <div className="form-control mt-6">
                           <input className="btn btn-primary bg-slate-700" type="submit" value="Login" />
                        </div>
                        <label className="label mt-2">
                                <a href="#" className="label-text-alt link link-hover">Don't have an account? Please <Link className='text-blue-400 font-bold' to="/register"> Register</Link></a>
                            </label>
                        <button className="google-signin btn btn-outline btn-accent mt-3" onClick={handleGoogleSignIn}>
          Sign in with Google <FaGoogle className='ms-2 text-center text-slate-600'></FaGoogle>
        </button>
</form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;