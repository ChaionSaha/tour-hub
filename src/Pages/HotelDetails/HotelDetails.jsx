import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";
import CustomTitle from "../Shared/CustomTitle.jsx";
import HotelDetailsHeader from "./HotelDetailsHeader.jsx";
import {StarIcon} from "@heroicons/react/24/solid/index.js";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.bubble.css';
import './HotelDetails.scss';
import 'react-calendar/dist/Calendar.css';
import CalenderModal from "./CalenderModal.jsx";
import {useDispatch, useSelector} from "react-redux";
import {bookingActions} from "../../store/index.js";
import BlogSection from "../Homepage/EntryPage/BlogSection.jsx";

const today = new Date();

function localDate(date = new Date()) {
    const localizedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    return localizedDate;
}

const HotelDetails = () => {
    const {hid} = useParams();
    const [hotelDetails, setHotelDetails] = useState({});
    const [minDate, setMinDate] = useState(today);
    const [maxDate, setMaxDate] = useState(today);
    const navigate = useNavigate();
    const dispacth = useDispatch();

    const booking = useSelector((state) => state.book);


    useEffect(() => {
        const run = async () => {
            const {data} = await axios(`${import.meta.env.VITE_serverLink}/getHotelDetails/${hid}`)
            setHotelDetails(data);
        }
        run().catch(err => toast.error(err.message));
    }, [hid]);


    return (
        <div className='bg-base-200'>
            <CustomTitle title={hotelDetails.name}/>
            <HotelDetailsHeader title={hotelDetails.name}
                                img={hotelDetails.bgImg || 'https://i.ibb.co/vjfLwKt/hotel-placeholder.jpg'}/>

            <div className="container px-5 lg:px-0 mt-10">
                <div className="flex flex-col lg:flex-row justify-between gap-y-5 lg:items-center">
                    <p className='text-4xl font-bold'>{hotelDetails.name}</p>
                    <p className='bg-primary font-bold items-center text-xl w-fit gap-x-2 flex lg:px-5 p-2 px-5 lg:py-3 rounded-lg text-white'>
                        <StarIcon className='w-4 text-[#FF9243]'/>
                        {hotelDetails.rating}
                    </p>
                </div>
                <div className='flex gap-x-5 mt-5 text-lg'>
                    <p className='text-xl '>
                        <i className='bi bi-geo-alt'></i>
                    </p>
                    <p>{hotelDetails.address}</p>
                </div>

                <div className="flex flex-col gap-y-10 lg:flex-row justify-between gap-x-10">
                    <div className="lg:w-[60%]">
                        <p className='text-2xl font-bold mt-10'>About Hotel</p>
                        <ReactQuill
                            theme='bubble'
                            value={hotelDetails.details}
                            readOnly={true}
                            placeholder='Start Writing Here...'
                            className='mt-5'
                        />
                    </div>
                    <div className="lg:w-[30%] h-fit flex flex-col gap-y-5 bg-base-100 p-5 rounded-xl border">
                        <div className="flex items-end gap-x-1 justify-center py-5 border-b">
                            <p className='text-4xl font-bold'>${hotelDetails.price}</p> {' '}
                            <p>/per day</p>
                        </div>


                        <div className="flex flex-col">
                            <p>Check-In Date</p>
                            <p onClick={() => window.minDate.showModal()}
                               className='border border-gray-300 rounded-lg p-3 px-4'>{localDate(minDate)}</p>
                            <dialog id='minDate' className='modal'>
                                <CalenderModal minDate={today}
                                               dialogId={window.minDate}
                                               setDate={setMinDate} title='Check-In'/>
                            </dialog>

                        </div>
                        <div className="flex flex-col">
                            <p>Check-Out Date</p>
                            <p onClick={() => window.maxDate.showModal()}
                               className='border border-gray-300 rounded-lg p-3 px-4'>{localDate(maxDate)}</p>
                            <dialog id='maxDate' className='modal'>
                                <CalenderModal minDate={today}
                                               dialogId={window.maxDate}
                                               setDate={setMaxDate} title='Check-Out'/>
                            </dialog>
                        </div>

                        <button className='btn btn-primary text-white' onClick={(e) => {
                            e.preventDefault();
                            if (minDate > maxDate)
                                return toast.error('Check-out date cannot be earlier than check-in date');

                            dispacth(bookingActions.book({hotelDetails, minDate, maxDate}));
                            navigate('/payment')
                        }}>Start
                            Booking
                        </button>
                    </div>
                </div>
            </div>

            <BlogSection/>
        </div>
    );
};

export default HotelDetails;