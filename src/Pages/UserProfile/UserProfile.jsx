import React, {useEffect, useState} from 'react';
import {useAuthState} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init.js";
import axios from "axios";
import {toast} from "react-toastify";
import {NavLink} from "react-router-dom";

const UserProfile = () => {
    const [imgLink] = useState(
        'https://i.ibb.co/2g0bYcB/shifaaz-shamoon-Rl9l9m-L6-Pvs-unsplash-1.png'
    );

    const [userDetails, setUserDetails] = useState({});
    const [user] = useAuthState(auth);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const run = async () => {
            await axios(`${import.meta.env.VITE_serverLink}/get-user?email=${user.email}`).then(({data}) => {
                setUserDetails(data);
            }).catch(err => toast.error(err.message));
            await axios(`${import.meta.env.VITE_serverLink}/get-bookings-by-user?email=${user.email}`).then(({data}) => {
                setBookings(data);
            }).catch(err => toast.error(err.message));
        }

        run().catch(err => toast.error(err.message));
    }, []);

    return (
        <div>
            <div
                style={{
                    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.2) 100%), url(${imgLink})`,
                }}
                className='min-h-[30vh] text-center text-white bgImg flex text-5xl font-bold justify-center items-center px-5 lg:px-0'
            >
                Hi, {userDetails.firstName} {userDetails.lastName}
            </div>
            <div className="container px-5 lg:px-0">

                <p className='text-4xl font-semibold mt-20 '>Your Hotel Bookings</p>
                {
                    bookings.length !== 0 &&
                    <div className="overflow-x-auto mb-36 mt-20">
                        <table className="table ">
                            {/* head */}
                            <thead>
                            <tr className='text-base uppercase'>
                                <th></th>
                                <th>Hotel Name</th>
                                <th>Booking Duration</th>
                                <th>Payment</th>
                                <th>Payment Method</th>
                                <th>Phone Number</th>
                                <th>Transaction ID</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                bookings.map((b, i) => {
                                    return <tr key={i} className='hover text-base'>
                                        <td>{i + 1}</td>
                                        <td>{b.hotelDetails?.name}</td>
                                        <td>{b.priceDetails?.totalDay} days</td>
                                        <td>${b.priceDetails?.totalPrice}</td>
                                        <td>{b.paymentMethod?.name}</td>
                                        <td>{b.number}</td>
                                        <td>{b.transactionId}</td>
                                        <td>
                                            {b.status === 'pending' && <span className='text-warning'>Pending</span>}
                                            {b.status === 'accepted' && <span className='text-success'>Accepted</span>}
                                            {b.status === 'rejected' && <span className='text-error'>Rejected</span>}

                                        </td>
                                    </tr>
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                }

                {
                    bookings.length === 0 &&
                    <p className='text-2xl mt-10 mb-36 text-secondary'>No bookings yet. Go to <NavLink
                        className='underline'
                        to='/hotels'>Hotels</NavLink> page and book a
                        hotel. </p>
                }
            </div>
        </div>
    );
};

export default UserProfile;