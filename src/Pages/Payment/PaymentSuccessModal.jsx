import React from 'react';
import tick from './../../img/tick.png'
import {useNavigate} from "react-router-dom";

const PaymentSuccessModal = () => {

    const navigate = useNavigate();

    return (
        <div className="modal-box">
            <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button onClick={() => navigate('/')}
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕
                </button>
            </form>
            <div className="flex items-center py-10 text-center flex-col">
                <img src={tick} alt=""/>
                <p className='text-2xl font-semibold text-secondary mt-5'>Yay! Payment Completed</p>
                <p className='text-[#6f6f6f] mt-2'>We will update your booking request that you requested
                    once the transaction is accepted
                </p>
                <button className='btn btn-primary px-10 mt-5 text-white' onClick={() => navigate('/')}>Back to Home
                </button>
            </div>
        </div>


    );
};

export default PaymentSuccessModal;