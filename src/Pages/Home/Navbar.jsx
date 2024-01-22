import React, {useEffect, useRef, useState} from 'react';
import {useAuthState, useSignOut} from 'react-firebase-hooks/auth';
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../img/logo.png';
import './Home.scss';

const Navbar = () => {
    const [isShown, setIsShown] = useState(false);
    const location = useLocation();
    const ref = useRef(null);
    useEffect(() => {
        setIsShown(false);
        // if(ref.current.className.contains()
    }, [location]);

    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);
    const navigate = useNavigate();


    return (
        <div className='lg:border-b'>
            <div className='container relative flex items-center py-5 gap-x-5 lg:justify-between'>
                <button
                    className='mx-5 text-lg lg:hidden btn-sm btn btn-outline'
                    onClick={() => setIsShown(true)}
                >
                    <i className='bi bi-list'></i>
                </button>
                <NavLink to='/'>
                    <img src={logo} alt='' className='w-40 lg:w-52'/>
                </NavLink>
                <div className='items-center hidden lg:flex gap-x-10 navlink-container'>
                    <NavLink to='/hotels'>Hotels</NavLink>
                    <NavLink to='/blogs'>Trips Blogs</NavLink>
                    <NavLink to='/tourguides'>Tour Guides</NavLink>

                    {user ? (
                        <div className='dropdown dropdown-hover dropdown-end' ref={ref}>
                            <div tabIndex={0} role="button" className='m-1 btn btn-ghost'>
                                <i className='text-2xl bi bi-person-circle'></i>
                            </div>
                            <ul tabIndex={0}
                                className='p-2 shadow-xl border menu dropdown-content z-[1] bg-base-100 rounded-box w-52'>
                                <li>
                                    <button onClick={() => navigate('/profile')} className='text-base'>Profile</button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => {
                                            signOut();
                                        }}
                                        className='text-base'
                                    >
                                        Log Out
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <NavLink to='/login'>Login</NavLink>
                    )}
                </div>
                <div
                    className={`fixed h-[100vh]  text-3xl border font-bold w-[100vw] top-0 left-0 z-[999] justify-center flex flex-col items-center lg:hidden bg-base-100 gap-y-10 ${
                        isShown ? 'translate-x-0' : ' translate-x-[-100%]'
                    } duration-150`}
                >
                    <button
                        className='absolute top-[2%] text-xl right-[5%] btn btn-outline'
                        onClick={() => setIsShown(false)}
                    >
                        <i className='bi bi-x'></i>
                    </button>


                    {user ? (
                        <p
                            onClick={async () => {

                                signOut();
                            }}
                            className=' absolute bottom-[10%] text-2xl  font-bold text-error btn btn-ghost btn-sm '
                        >
                            Sign Out
                        </p>
                    ) : (
                        <NavLink to='/login' className='mt-36'>Login</NavLink>
                    )}
                    {user && <NavLink to='/profile'>Profile</NavLink>}
                    <NavLink to='/hotels'>Hotels</NavLink>
                    <NavLink to='/blogs'>Trips Blogs</NavLink>
                    <NavLink to='/tourguides'>Tour Guides</NavLink>


                </div>
            </div>
        </div>
    );
};

export default Navbar;
