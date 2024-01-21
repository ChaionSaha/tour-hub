import React from 'react';
import {useAuthState} from "react-firebase-hooks/auth";
import auth from "../../firebase.init.js";
import {Navigate} from "react-router-dom";

const ProtectedLogin = ({children}) => {
    const [user, loading] = useAuthState(auth);
    // const location = useLocation();

    if (loading)
        return <div className='w-full flex justify-center py-40'>
            <span className="loading loading-dots loading-lg text-primary"></span>
        </div>

    if (user)
        return <Navigate to='/' replace={true}/>

    return children;
};

export default ProtectedLogin;