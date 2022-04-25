import React from 'react';
import { Navigate, Route, useLocation } from 'react-router-dom';
import useContext from '../Hooks/useContext';

const PrivateRoute = ({ children, ...rest }) => {
    const { auth } = useContext();
    let location = useLocation();
    if (auth.isAuthenticated) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}}></Navigate>
};

export default PrivateRoute;
