/* eslint-disable*/
import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
if(loading){
 return   <div className="radial-progress" style={{"--value":70}}>70%</div>
}

if(user){
    return children;
}
    return <Navigate state={{from: location}} to="/login" replace></Navigate>;
};

export default PrivateRoute;