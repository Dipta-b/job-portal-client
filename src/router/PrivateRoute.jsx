import React, { useContext } from 'react'
import AuthContext from '../provider/AuthContext'
import { Navigate, useLocation } from 'react-router-dom';
import { span } from 'motion/react-client';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    if (loading) {
        return <span className='loading loading-ring loading-lg'></span>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/signin" state={location?.pathname}></Navigate>
}

export default PrivateRoute