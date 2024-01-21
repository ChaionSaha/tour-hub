import React from 'react';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';


const CalenderModal = ({minDate, setDate, dialogId, title}) => {
    const handleDateChange = (date) => {
        setDate(date);
        dialogId.close();
    }

    return (

        <div className="modal-box">
            <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <div className="flex flex-col">

                <h3 className="font-bold text-lg mb-5">{title} Date:</h3>
                <Calendar onChange={handleDateChange} minDate={minDate}
                          className=' rounded-xl overflow-hidden self-center w-full' defaultValue={minDate}
                />
            </div>
        </div>

    )
        ;
};

export default CalenderModal;