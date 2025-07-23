import React, { useContext } from 'react';
import { AuthContext } from '../../../../RootLayout/RootLayout';
import { Navigate, useLocation } from 'react-router';
import Loading from '../../Loading/Loading';

const PrivetRoute = ({children}) => {
    const{user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <Loading></Loading>
    }
    if(!user || !user?.email){
        return <Navigate state={{from:location.pathname}} to="/signin"></Navigate>
    }
    return <div>{children}</div>
};

export default PrivetRoute;