import React, {useEffect, useState} from 'react';
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import {useForm} from 'react-hook-form';
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import auth from '../../../firebase.init';
import CustomTitle from '../Shared/CustomTitle';
import axios from "axios";

const Login = () => {
    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm({
        defaultValues: {
            email: '',
            pass: '',
        },
    });
    const [showPass, setShowPass] = useState(false);
    const [signInWithEmailAndPassword, _, loading, error] =
        useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = async (formData) => {
        const {user} = await signInWithEmailAndPassword(formData.email, formData.pass);
        if (user) {
            await axios(`${import.meta.env.VITE_serverLink}/user-login?email=${user.email}`)
                .catch((err) => {
                    toast.error(err.message);
                });
            navigate(location?.state?.from?.pathname || '/');
        }
    };

    useEffect(() => {
        if (error) toast.error(error.message);
    }, [error]);


    return (
        <div className='container flex flex-col items-center justify-center px-5 py-40 lg:px-0'>
            <CustomTitle title='Login'/>
            <div className='flex flex-col lg:w-[40%]'>
                <p className='mb-10 text-4xl font-bold text-center'>Welcome Back</p>
                <div className='flex flex-col mb-7'>
                    <label htmlFor='email'>Email</label>
                    <input
                        id='email'
                        {...register('email', {required: true})}
                        type='email'
                        className='input input-bordered'
                        placeholder='email@xyz.com'
                    />
                    {errors.email && (
                        <span className='text-error'>This is a required field</span>
                    )}
                </div>
                <form className='flex flex-col'>
                    <div className='relative flex flex-col mb-7'>
                        <label htmlFor='pass'>Password</label>
                        <div className='relative w-full'>
                            <input
                                id='pass'
                                {...register('pass', {required: true})}
                                type={`${showPass ? 'text' : 'password'}`}
                                className='w-full input input-bordered'
                                placeholder='Password'
                            />
                            <div
                                onClick={() => setShowPass(!showPass)}
                                className='absolute right-0 btn btn-outline top-[2%] border-transparent hover:border-transparent hover:bg-transparent hover:text-black'
                            >
                                <i className={`bi ${showPass ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                            </div>
                        </div>
                        {errors.pass && (
                            <span className='text-error'>This is a required field</span>
                        )}
                    </div>

                    <p className='mb-2 lg:mb-1 lg:self-center'>
                        Don't have any account?{' '}
                        <span className='text-primary hover:underline'>
							<NavLink to='/signup'>Create a new account</NavLink>
						</span>
                    </p>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            handleSubmit(handleLogin)();
                        }}
                        className='px-10 text-white btn btn-primary'
                        disabled={loading ? true : false}
                    >
                        {loading ? (
                            <span className='loading loading-spinner loading-xs'></span>
                        ) : (
                            'Login'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
