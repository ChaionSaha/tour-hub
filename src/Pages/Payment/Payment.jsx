import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import bkash from '../../img/bkash.png'
import nagad from '../../img/nagad.png'
import rocket from '../../img/rocket.png'
import {useForm} from "react-hook-form";
import {useAuthState} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init.js";
import axios from "axios";
import {toast} from "react-toastify";
import PaymentSuccessModal from "./PaymentSuccessModal.jsx";
import axiosPrivate from "../../api/axiosPrivate.jsx";

const dateToString = (date = new Date()) => {
    const dateString = date.toLocaleDateString('en-US', {
        weekday: 'long',
        day: 'numeric',
        year: 'numeric',
        month: 'short'
    })
    return dateString;
}

const VAT = 2;
const SERVICE_FEE = 20;

const paymentMethods = [
    {
        img: bkash,
        id: "bkash",
        name: "Bkash",
        number: "+88 01717377351"
    },
    {
        img: nagad,
        id: "nagad",
        name: "Nagad",
        number: "+88 01717377351"
    },
    {
        img: rocket,
        id: "rocket",
        name: "Rocket",
        number: "+88 01717377351"
    }
]
const Payment = () => {
    const hotelDetails = useSelector(state => state.book.hotelDetails);
    const booking = useSelector(state => state.book);
    const [defaultImg] = useState('https://i.ibb.co/D9mtjps/TAL-anantara-plaza-nice-presidential-balcony-view-ANATARANICE0223-d8b6ad1eb6ac4ac7b0877f4ca0ff691a.jpg');
    const navigate = useNavigate();
    const [priceDetails, setPriceDetails] = useState({});
    const [user] = useAuthState(auth);
    const [userDetails, setUserDetails] = useState({});
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const [selectedMethod, setSelectedMethod] = useState({
        img: bkash,
        id: "bkash",
        name: "Bkash",
        number: "+88 01717377351"
    });

    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            number: "",
            transactionId: ''
        }
    })

    useEffect(() => {
        const totalTime = booking.maxDate.getTime() - booking.minDate.getTime();
        const totalDay = Math.ceil((totalTime / (1000 * 60 * 60 * 24)) + 1);
        const roomPrice = totalDay * hotelDetails.price;
        const roomVat = roomPrice * (VAT / 100);
        const totalPrice = roomPrice + roomVat + SERVICE_FEE;
        setPriceDetails({totalDay, roomPrice, roomVat, totalPrice});
    }, [booking]);

    useEffect(() => {
        const run = async () => {
            await axiosPrivate(`${import.meta.env.VITE_serverLink}/get-user?email=${user.email}`).then(res => setUserDetails(res.data)).catch(err => toast.error(err.message));
        }
        run().catch(err => toast.error(err.message));
    }, [user.email]);

    const handleFormSubmit = async (formData) => {
        setLoading(true);
        formData.paymentMethod = {
            name: selectedMethod.name,
            number: selectedMethod.number
        };
        formData.userDetails = {...userDetails};
        formData.hotelDetails = {name: hotelDetails.name, price: hotelDetails.price, hid: hotelDetails.hid};
        formData.priceDetails = {...priceDetails, minDate: booking.minDate, maxDate: booking.minDate};

        await axios.post(`${import.meta.env.VITE_serverLink}/hotel-booking?email=${user.email}`, formData).then(res => {
            window.paymentSuccess.showModal();

        }).catch(err => toast.error(err.message))
        setLoading(false);
    }

    return (
        <div className='bg-base-200'>

            <div className='container px-5 lg:px-0 flex flex-col pt-10 pb-20'>
                <p onClick={() => navigate(-1)} className='text-lg cursor-pointer font-semibold text-secondary'><i
                    className='bi bi-arrow-left'></i> Back to Hotel
                    Page
                </p>
                <p className='text-3xl text-center font-semibold mt-10'>Payment Details</p>
                <div
                    className="grid lg:w-[70%] w-full  self-center lg:grid-cols-2 bg-base-100 border rounded-lg mt-10">
                    <div
                        className="flex w-full flex-col lg:border-r border-b lg:border-b-0 pb-10">
                        <div className="w-full ">
                            <img
                                src={hotelDetails.bgImg || defaultImg}
                                className=' object-cover w-full'/>
                        </div>
                        <div className="px-5 w-full">
                            <p className='text-2xl font-bold mt-5 text-secondary'>{hotelDetails.name}</p>
                            <div className="flex items-center gap-x-1 mt-5"><p>Check-In:</p><p
                                className='font-semibold text-lg text-primary'>{dateToString(booking.minDate)}</p>
                            </div>
                            <div className="flex items-center gap-x-1 "><p>Check-Out:</p><p
                                className='font-semibold text-lg text-primary'>{dateToString(booking.maxDate)}</p>
                            </div>
                            <div className="border w-full my-10"></div>
                            <p className='text-2xl font-semibold text-secondary'>Price Details</p>
                            <div
                                className="flex w-full  justify-between text-xl mt-10 font-medium text-secondary">
                                <p>${hotelDetails.price} x {priceDetails.totalDay} nights </p>
                                <p>${priceDetails.roomPrice}</p>
                            </div>
                            <div
                                className="flex w-full  justify-between text-xl mt-5 font-medium text-secondary">
                                <p>VAT ${VAT}% </p>
                                <p>${priceDetails.roomVat}</p>
                            </div>
                            <div className="flex justify-between text-xl mt-5 font-medium text-secondary">
                                <p>Service fee </p>
                                <p>${SERVICE_FEE}</p>
                            </div>
                            <div className="border my-5"></div>
                            <div className="flex justify-between text-xl mt-5 font-medium text-secondary">
                                <p>Total </p>
                                <p>${priceDetails.totalPrice}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col py-10 px-5">
                        <p className='text-2xl font-bold'>Payment Method</p>
                        <div className="flex gap-x-5 mt-10">
                            {
                                paymentMethods.map((p, i) => {
                                    return <div key={i}>
                                        <input value={p.id} type="radio" id={p.id}
                                               name="paymentMethod"
                                               className='hidden' defaultChecked={selectedMethod.id === p.id}/>
                                        <label htmlFor={p.id}
                                               className='cursor-pointer' onClick={() => setSelectedMethod(p)}>

                                            <p className={`lg:w-32 p-3 py-0 flex justify-center ${selectedMethod.id === p.id ? 'border-primary' : ''} items-center border-2  rounded-xl`}>

                                                <img
                                                    className={`w-24 h-14  ${selectedMethod.id === p.id ? '' : 'grayscale'}`}
                                                    src={p.img}
                                                    alt={p.id}/>
                                            </p>

                                        </label>
                                    </div>
                                })
                            }
                        </div>
                        <form onSubmit={handleSubmit(handleFormSubmit)} className='flex flex-col lg:w-[90%] w-full'>

                            <div className="mt-16">
                                <p className='font-semibold text-xl'>{selectedMethod.name} Agent Number:</p>
                                <p className='font-medium text-lg'>{selectedMethod.number}</p>
                            </div>
                            <div className="flex flex-col mt-16 ">
                                <label
                                    className='text-lg font-medium'>Your {selectedMethod.name} Number <sup>*</sup></label>
                                <input {...register('number', {required: true})} type="text"
                                       className='input input-bordered'/>
                                {
                                    errors.number && <span className='text-error'>Phone number is required</span>
                                }
                            </div>
                            <div className="flex flex-col mt-5 ">
                                <label
                                    className='text-lg font-medium'>Transaction ID <sup>*</sup></label>
                                <input  {...register('transactionId', {required: true})} type="text"
                                        className='input input-bordered'/>
                                {
                                    errors.transactionId &&
                                    <span className='text-error'>Transaction ID is required</span>
                                }
                            </div>
                            <button type="submit" className='self-end btn btn-primary mt-16 text-white px-10'
                                    disabled={loading}>
                                {loading ? <span className='loading loading-spinner  text-primary'></span> : "Submit"}
                            </button>
                        </form>
                    </div>

                    <dialog id="paymentSuccess" className="modal">
                        <PaymentSuccessModal/>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default Payment;