import React from 'react';
import {useAuthState} from "react-firebase-hooks/auth";
import auth from "../../firebase.init.js";
import {Navigate, useLocation} from "react-router-dom";

const RequiredAuth = ({children}) => {
    const [user] = useAuthState(auth);
    3
    const location = useLocation();
    if (!user)
        return <Navigate to='/login' state={{from: location}} replace/>
    return children;
};

export default RequiredAuth;