import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import logo from '../../img/logo.png';
import CustomTitle from '../Shared/CustomTitle';

const SignUp = () => {
	const {
		register,
		watch,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			pass: '',
			conpass: '',
		},
	});

	const [showPass, setShowPass] = useState(false);
	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth);
	const navigate = useNavigate();

	const handleSignUp = async (data) => {
		const { user } = await createUserWithEmailAndPassword(
			data.email,
			data.pass
		);

		if (user) {
			const result = await axios
				.post(`${import.meta.env.VITE_serverLink}/user-signup`, {
					firstName: data.firstName,
					lastName: data.lastName,
					email: data.email,
				})
				.catch((err) => toast.error(err.message));
			if (result.status === 200) {
				navigate('/');
			}
		}
	};

	useEffect(() => {
		if (error) toast.error(error.message);
	}, [error]);

	return (
		<div className='container flex flex-col items-center justify-center h-screen px-5 lg:px-0'>
			<CustomTitle title='Sign Up' />
			<form className='lg:w-[40%] w-full'>
				<div className='flex flex-col w-[100%]'>
					<NavLink to='/' className='self-center'>
						<img src={logo} alt='' className='self-center mb-16 w-fit' />
					</NavLink>

					<div className='grid lg:grid-cols-2 gap-x-5'>
						<div className='flex flex-col mb-7'>
							<label>First Name</label>
							<input
								{...register('firstName', { required: true })}
								type='text'
								className='input input-bordered'
								placeholder='First Name'
							/>
							{errors.firstName && (
								<span className='text-error'>This is a required field</span>
							)}
						</div>
						<div className='flex flex-col mb-7'>
							<label>Last Name</label>
							<input
								{...register('lastName', { required: true })}
								type='text'
								className='input input-bordered'
								placeholder='Last Name'
							/>
							{errors.lastName && (
								<span className='text-error'>This is a required field</span>
							)}
						</div>
					</div>
					<div className='flex flex-col mb-7'>
						<label>Email</label>
						<input
							{...register('email', { required: true })}
							type='email'
							className='input input-bordered'
							placeholder='email@xyz.com'
						/>
						{errors.email && (
							<span className='text-error'>This is a required field</span>
						)}
					</div>
					<div className='relative flex flex-col mb-7'>
						<label>Password</label>
						<div className='relative'>
							<input
								{...register('pass', { required: true })}
								type={`${showPass ? 'text' : 'password'}`}
								className='w-full input input-bordered'
								placeholder='Password'
							/>

							<div
								onClick={() => setShowPass(!showPass)}
								className='absolute right-0 btn btn-outline top-[2%] border-transparent  hover:border-transparent hover:bg-transparent hover:text-black'
							>
								<i className={`bi ${showPass ? 'bi-eye-slash' : 'bi-eye'}`}></i>
							</div>
						</div>
						{errors.pass && (
							<span className='text-error'>This is a required field</span>
						)}
					</div>
					<div className='flex flex-col mb-7'>
						<label>Confirm Password</label>
						<input
							{...register('conpass')}
							type={`${showPass ? 'text' : 'password'}`}
							className='input input-bordered'
							placeholder='Confirm Password'
						/>
						{watch('pass') !== watch('conpass') ? (
							<span className='text-error'>Passwords should be matched</span>
						) : (
							<></>
						)}
					</div>
					<p className='self-center mb-1'>
						Already have an account?{' '}
						<span className='text-primary hover:underline'>
							<NavLink to='/login'>Login</NavLink>
						</span>
					</p>
					{loading ? (
						<button className='text-white btn btn-primary' disabled={true}>
							<span className='loading loading-spinner loading-xs'></span>
						</button>
					) : (
						<button
							className='text-white btn btn-primary'
							onClick={(e) => {
								e.preventDefault();
								handleSubmit(handleSignUp)();
							}}
							disabled={
								watch('pass') !== ''
									? watch('pass') !== watch('conpass')
										? true
										: false
									: true
							}
						>
							Sign Up
						</button>
					)}
				</div>
			</form>
		</div>
	);
};

export default SignUp;
