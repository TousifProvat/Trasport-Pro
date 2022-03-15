import React, { createContext } from 'react';
// import useFirebase from '../../Hooks/useFirebase';
import useContext from '../Hooks/useContext';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const allContext = useContext();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
